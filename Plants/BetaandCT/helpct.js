const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
// --- Helpers ---
const createCategoryEmbed = require("../../Utilities/createCategoryEmbed.js");
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
const buildNavRow = require("../../Utilities/buildNavRow.js");
const matchesCategory = require("../../Utilities/matchesCategory.js");
module.exports = {
  name: `helpct`,
  aliases: [
    `ctcommands`,
    `commandsct`,
    `cthelp`,
    `helpcitron`,
    `helptron`,
    `ctdecks`,
    `citronhelp`,
    `citrondecks`,
    `citroncommands`,
    `ctdeck`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const hero = "Citron";
    const categoryColor = "#964B00";
    const deckColor = "Orange";
    // fetch rows: each row is a deck
    const [rows] = await db.query("SELECT * FROM ctdecks order by name asc");
    if (!rows || rows.length === 0) {
      return message.channel.send("No Citron decks found in the database.");
    }

    // normalize rows and key properties (added normalization fields)
    const normalized = rows.map((r) => {
      const rawType = (r.type || "").toString();
      const rawArch = (r.archetype || "").toString();
      const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove spaces/punctuation
      return {
        id: r.deckID ?? null,
        name: r.name ?? r.deckID ?? "Unnamed",
        type: rawType,
        archetype: rawArch,
        cost: r.cost ?? r.deckcost ?? "",
        typeNorm: normalize(rawType),
        archetypeNorm: normalize(rawArch),
        description: r.description ?? "",
        image: r.image ?? null,
        creator: r.creator ?? "",
        raw: r,
      };
    });

    // build category lists from DB dynamically (unchanged)
    const categories = [
      "budget",
      "comp",
      "ladder",
      "meme",
      "combo",
      "control",
      "midrange",
      "tempo",
      "aggro",
      "all",
    ];
    const deckLists = {};
    for (const cat of categories) {
      deckLists[cat] = normalized.filter((r) => matchesCategory(r, cat));
    }

    // debug counts (optional)
    console.log(
      "category counts:",
      Object.fromEntries(categories.map((c) => [c, deckLists[c].length]))
    );

    // thumbnail
    const thumb =
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747";

    // create category overview embeds (used when nav hits ends for special cats)
    const categoryEmbeds = {};
    for (const cat of categories) {
      const pretty =
        cat === "comp"
          ? "Competitive"
          : cat.charAt(0).toUpperCase() + cat.slice(1);
      categoryEmbeds[cat] = createCategoryEmbed(
        hero,
        categoryColor,
        pretty,
        deckLists[cat].map((r) => r.name.replace(/\s+/g, "").toLowerCase()),
        deckLists[cat].length,
        thumb
      );
    }
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Citron's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setDescription("Some of the Best Plant Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrange"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription("View all Citron decks in Tbot")
          .setEmoji("<:Citron_Pog:1100168420743450654>")
      );
    const m = await message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("Citron Decks")
          .setDescription(
            `To view the Citron decks please select an option from the select menu below!\nNote: Citron has ${normalized.length} total decks in Tbot`
          )
          .setColor("#964B00")
          .setThumbnail(thumb),
      ],
      components: [new ActionRowBuilder().addComponents(select)],
    });

    const specialCategories = [
      "comp",
      "all",
      "meme",
      "aggro",
      "midrange",
      "combo",
      "control",
    ];
    const filter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter });

    collector.on("collect", async (i) => {
      try {
        if (i.isStringSelectMenu()) {
          const value = i.values[0];
          const list = deckLists[value] || [];
          if (list.length === 0)
            return i.reply({
              content: "No decks in that category.",
              flags: MessageFlags.Ephemeral,
            });
          // If the category has exactly one deck, reply with that deck's embed (ephemeral)
          if (list.length === 1) {
            const singleEmbed = buildDeckEmbed(list[0], deckColor);
            return i.reply({
              embeds: [singleEmbed],
              flags: MessageFlags.Ephemeral,
            });
          }

          // Reply with the category embed and two buttons:
          // left -> last deck in category, right -> first deck in category.
          const catEmbed =
            categoryEmbeds[value] ??
            createCategoryEmbed(
              hero,
              categoryColor,
              value.charAt(0).toUpperCase() + value.slice(1),
              [],
              0,
              thumb
            );
          const firstIndex = 0;
          const lastIndex = Math.max(0, list.length - 1);

          // avoid duplicate custom_ids when firstIndex === lastIndex by appending suffix to one id
          const leftId = `nav_${value}_${lastIndex}${
            lastIndex === firstIndex ? "_alt" : ""
          }`;
          const rightId = `nav_${value}_${firstIndex}`;

          const leftBtn = new ButtonBuilder()
            .setCustomId(leftId)
            .setEmoji("⬅️")
            .setStyle(ButtonStyle.Primary);

          const rightBtn = new ButtonBuilder()
            .setCustomId(rightId)
            .setEmoji("➡️")
            .setStyle(ButtonStyle.Primary);

          const actionRow = new ActionRowBuilder().addComponents(
            leftBtn,
            rightBtn
          );

          // update the original message to show category overview + navigation options
          return i.update({ embeds: [catEmbed], components: [actionRow] });
        }

        if (i.isButton()) {
          const parts = i.customId.split("_");
          const action = parts[0];

          if (action === "nav") {
            const category = parts[1];
            // parseInt will ignore any trailing non-numeric suffix like "_alt"
            const index = parseInt(parts[2], 10);
            const list = deckLists[category] || [];
            if (!list[index])
              return i.reply({
                content: "Deck not found.",
                flags: MessageFlags.Ephemeral,
              });
            const embed = buildDeckEmbed(list[index].raw, deckColor);
            const nav = buildNavRow(
              category,
              index,
              list.length,
              specialCategories
            );
            return i.update({ embeds: [embed], components: [nav] });
          }

          if (action === "back" && parts[1] === "to" && parts[2] === "list") {
            const category = parts[3];
            const pretty =
              category === "comp"
                ? "Competitive"
                : category.charAt(0).toUpperCase() + category.slice(1);
            const list = deckLists[category] || [];
            const catEmbed =
              categoryEmbeds[category] ||
              createCategoryEmbed(hero, categoryColor, pretty, [], 0, thumb);

            // build left -> last, right -> first (avoid duplicate ids when only one item)
            const firstIndex = 0;
            const lastIndex = Math.max(0, list.length - 1);
            const leftId = `nav_${category}_${lastIndex}${
              lastIndex === firstIndex ? "_alt" : ""
            }`;
            const rightId = `nav_${category}_${firstIndex}`;

            const leftBtn = new ButtonBuilder()
              .setCustomId(leftId)
              .setEmoji("⬅️")
              .setStyle(ButtonStyle.Primary);

            const rightBtn = new ButtonBuilder()
              .setCustomId(rightId)
              .setEmoji("➡️")
              .setStyle(ButtonStyle.Primary);

            const actionRow = new ActionRowBuilder().addComponents(
              leftBtn,
              rightBtn
            );

            return i.update({ embeds: [catEmbed], components: [actionRow] });
          }

          // fallback: unknown customId
          return i.reply({
            content: "Unknown button.",
            flags: MessageFlags.Ephemeral,
          });
        }
      } catch (err) {
        console.error(err);
        if (!i.replied && !i.deferred) {
          await i.reply({
            content: "An error occurred.",
            flags: MessageFlags.Ephemeral,
          });
        }
      }
    });

    collector.on("end", () => {
      m.edit({ components: [] }).catch(() => {});
    });
  },
};
