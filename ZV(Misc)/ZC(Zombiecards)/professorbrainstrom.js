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
// small helpers
function createHelpEmbed(title, description, thumbnail, footer) {
  const e = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#FFC0CB");
  if (footer) e.setFooter({ text: footer });
  return e;
}
function createCategoryEmbed(name, deckNames, total, thumbnail) {
  const isAll = name.toLowerCase() === "all";
  const description =
    Array.isArray(deckNames) && deckNames.length
      ? deckNames.map((d) => `\n<@1043528908148052089> **${d}**`).join("")
      : "No decks available";
  return new EmbedBuilder()
    .setTitle(
      isAll
        ? "Professor Brainstorm Decks"
        : `Professor Brainstorm ${name} Decks`
    )
    .setDescription(
      isAll
        ? `All Professor Brainstorm decks in Tbot are:${description}`
        : `My ${name} decks for Professor Brainstorm are: ${description}`
    )
    .setThumbnail(thumbnail)
    .setColor("#FFC0CB")
    .setFooter({
      text: isAll
        ? `Professor Brainstorm has ${total} total decks in Tbot\nPlease click on the buttons below to navigate through the decks.`
        : `Professor Brainstorm has ${total} total ${name} decks in Tbot\nPlease click on the buttons below to navigate through the decks.`,
    });
}
function buildDeckEmbed(row) {
  const embed = new EmbedBuilder()
    .setTitle(row.name || "Unknown")
    .setDescription(row.description || "")
    .setFooter({ text: row.creator || "" })
    .addFields(
      {
        name: "Deck Type",
        value: `**__${row.type}__**` || "N/A",
        inline: true,
      },
      {
        name: "Archetype",
        value: `**__${row.archetype}__**` || "N/A",
        inline: true,
      },
      {
        name: "Deck Cost",
        value: `${row.cost} <:spar:1057791557387956274>` || "N/A",
        inline: true,
      }
    )
    .setColor("Purple");
  if (
    row.image &&
    typeof row.image === "string" &&
    row.image.startsWith("http")
  )
    embed.setImage(row.image);
  return embed;
}
function buildNavRow(category, currentIndex, total, specialCategories = []) {
  const isSpecial = specialCategories.includes(category);
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  let leftId =
    isSpecial && currentIndex === 0
      ? `back_to_list_${category}`
      : `nav_${category}_${prevIndex}`;
  let rightId =
    isSpecial && currentIndex === total - 1
      ? `back_to_list_${category}`
      : `nav_${category}_${nextIndex}`;
  if (leftId === rightId) rightId = `${rightId}_alt`;

  const left = new ButtonBuilder()
    .setCustomId(leftId)
    .setEmoji("⬅️")
    .setStyle(
      leftId.startsWith("back_to_list")
        ? ButtonStyle.Secondary
        : ButtonStyle.Primary
    );
  const right = new ButtonBuilder()
    .setCustomId(rightId)
    .setEmoji("➡️")
    .setStyle(
      rightId.startsWith("back_to_list")
        ? ButtonStyle.Secondary
        : ButtonStyle.Primary
    );

  // disable when only one deck to avoid confusion
  if (total <= 1) {
    left.setDisabled(true);
    right.setDisabled(true);
  }
  return new ActionRowBuilder().addComponents(left, right);
}
module.exports = {
  name: `professorbrainstorm`,
  aliases: [`pb`, `pbs`, `professor`, `brainstorm`, `prof`, `bs`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const [rows] = await db.query("SELECT * FROM pbdecks");
    if (!rows || rows.length === 0)
      return message.channel.send(
        "No Professor Brainstorm decks found in the database."
      );

    // normalize db rows -> deck objects
    const normalized = rows.map((r) => {
      const rawType = (r.type || "").toString();
      const rawArch = (r.archetype || "").toString();
      const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
      return {
        id: r.deckID ?? null,
        name: r.name ?? r.deckID ?? "Unnamed",
        type: rawType,
        archetype: rawArch,
        cost: r.cost ?? r.deckcost ?? "",
        image: r.image ?? null,
        creator: r.creator ?? "",
        typeNorm: normalize(rawType),
        archetypeNorm: normalize(rawArch),
        description: r.description ?? "",
        raw: r,
      };
    });

    function matchesCategory(row, cat) {
      const t = row.typeNorm;
      const a = row.archetypeNorm;
      if (cat === "all") return true;
      if (cat === "comp")
        return (
          t.includes("competitive") ||
          t.includes("comp") ||
          a.includes("competitive") ||
          a.includes("comp")
        );
      if (cat === "budget") return t.includes("budget") || a.includes("budget");
      if (cat === "ladder") return t.includes("ladder") || a.includes("ladder");
      if (cat === "meme") return t.includes("meme") || a.includes("meme");
      if (cat === "combo") return t.includes("combo") || a.includes("combo");
      if (cat === "control")
        return a.includes("control") || t.includes("control");
      if (cat === "midrange")
        return (
          a.includes("midrange") ||
          t.includes("midrange") ||
          a.includes("mid") ||
          t.includes("mid")
        );
      if (cat === "tempo") return t.includes("tempo") || a.includes("tempo");
      if (cat === "aggro") return a.includes("aggro") || t.includes("aggro");
      return false;
    }

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
    for (const cat of categories)
      deckLists[cat] = normalized.filter((r) => matchesCategory(r, cat));

    const thumb =
      "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022";
    const categoryEmbeds = {};
    for (const cat of categories) {
      const pretty =
        cat === "comp"
          ? "Competitive"
          : cat.charAt(0).toUpperCase() + cat.slice(1);
      categoryEmbeds[cat] = createCategoryEmbed(
        pretty,
        deckLists[cat].map((r) => r.name.replace(/\s+/g, "").toLowerCase()),
        deckLists[cat].length,
        thumb
      );
    }
    const embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle(
        "Professor Brainstorm | <:Brainy:1062500939908530246><:Crazy:1062502046474973224>"
      )
      .setDescription("**\\- Mustache Science Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Summoning <:Brainy:1062500939908530246> \n Make a random Zombie that costs 2<:Brainz:1062503146745774183> or less. \n Telepathy <:Brainy:1062500939908530246> \n Draw 2 cards. \n Dance Off <:Crazy:1062502046474973224> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancers in a lne of your choice. Then another appears in a random lanes. \n Eureka <:Brainy:1062500939908530246><:Crazy:1062502046474973224> \n __Conjure__ any three cards.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "His countless years of research revealed that E=MCraaazy!",
        }
      )
      .setColor("#FFC0CB");
    const helppbButton = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppb")
        .setLabel("Professor Brainstrom Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:HD_ProfessorBrainstorm:1088083603918958682>")
    );

    const m = await message.channel.send({
      embeds: [embed],
      components: [helppbButton],
    });

    const filter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter });

    collector.on("collect", async (i) => {
      try {
        // pressed the initial helppb button -> show the select menu (same UI helppb uses)
        if (i.customId === "helppb" && i.isButton()) {
          const select = new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Select an option below to view Brainstorm's decks")
            .addOptions(
              new StringSelectMenuOptionBuilder()
                .setLabel("Budget Deck")
                .setValue("budget")
                .setDescription("A deck that is cheap for new players")
                .setEmoji("💰"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Competitive Deck")
                .setValue("comp")
                .setDescription("Some of the best Decks in the game")
                .setEmoji("<:compemote:1325461143136764060>"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Meme Decks")
                .setDescription("Decks that are built off a weird/fun combo")
                .setValue("meme"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Aggro Deck")
                .setDescription(
                  "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
                )
                .setValue("aggro"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Combo Decks")
                .setDescription(
                  "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
                )
                .setValue("combo"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Control Decks")
                .setDescription(
                  'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
                )
                .setValue("control"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Midrange Deck")
                .setDescription(
                  "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
                )
                .setValue("midrange"),
              new StringSelectMenuOptionBuilder()
                .setLabel("All Brainstorm Decks")
                .setValue("all")
                .setDescription("View all the Brainstorm decks")
                .setEmoji("<:HD_ProfessorBrainstorm:1088083603918958682>")
            );

          // present the select menu (replace helprb button)
          await i.update({
            embeds: [
              createHelpEmbed(
                "Professor Brainstorm Decks",
                `Select a category to view Professor Brainstorm Decks — Professor Brainstorm has ${normalized.length} total decks.`,
                thumb
              ),
            ],
            components: [new ActionRowBuilder().addComponents(select)],
          });
          return;
        }

        // select menu chosen -> show category embed with nav buttons (left -> last, right -> first)
        if (i.isStringSelectMenu() && i.customId === "select") {
          const value = i.values[0];
          const list = deckLists[value] || [];
          if (list.length === 0)
            return i.reply({
              content: "No decks in that category.",
              flags: MessageFlags.Ephemeral,
            });

          // If the category has exactly one deck, reply with that deck's embed (ephemeral)
          if (list.length === 1) {
            const singleEmbed = buildDeckEmbed(list[0]);
            return i.reply({
              embeds: [singleEmbed],
              flags: MessageFlags.Ephemeral,
            });
          }

          const catEmbed =
            categoryEmbeds[value] ??
            createCategoryEmbed(
              value.charAt(0).toUpperCase() + value.slice(1),
              [],
              0,
              thumb
            );
          const firstIndex = 0;
          const lastIndex = Math.max(0, list.length - 1);
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
          if (list.length <= 1) {
            leftBtn.setDisabled(true);
            rightBtn.setDisabled(true);
          }

          const row = new ActionRowBuilder().addComponents(leftBtn, rightBtn);
          return i.update({ embeds: [catEmbed], components: [row] });
        }

        // button navigation (nav_* / back_to_list_*)
        if (i.isButton()) {
          const parts = i.customId.split("_");
          const action = parts[0];

          // noop or unknown -> acknowledge
          if (action === "noop")
            return i.reply({
              content: "No navigation available.",
              flags: MessageFlags.Ephemeral,
            });

          if (action === "nav") {
            const category = parts[1];
            const index = parseInt(parts[2], 10);
            const list = deckLists[category] || [];
            if (!list[index])
              return i.reply({
                content: "Deck not found.",
                flags: MessageFlags.Ephemeral,
              });

            const embed = buildDeckEmbed(list[index]);
            const nav = buildNavRow(category, index, list.length, [
              "comp",
              "all",
              "meme",
              "aggro",
              "midrange",
              "combo",
              "control",
            ]);
            return i.update({ embeds: [embed], components: [nav] });
          }

          if (action === "back" && parts[1] === "to" && parts[2] === "list") {
            const category = parts[3];
            const list = deckLists[category] || [];
            const catEmbed =
              categoryEmbeds[category] ??
              createCategoryEmbed(
                category.charAt(0).toUpperCase() + category.slice(1),
                [],
                0,
                thumb
              );
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
            if (list.length <= 1) {
              leftBtn.setDisabled(true);
              rightBtn.setDisabled(true);
            }

            const actionRow = new ActionRowBuilder().addComponents(
              leftBtn,
              rightBtn
            );
            return i.update({ embeds: [catEmbed], components: [actionRow] });
          }

          // fallback
          return i.reply({
            content: "Unknown button.",
            flags: MessageFlags.Ephemeral,
          });
        }
      } catch (err) {
        console.error("rustbolt collector error:", err);
        if (!i.replied && !i.deferred)
          await i.reply({
            content: "An error occurred.",
            flags: MessageFlags.Ephemeral,
          });
      }
    });

    collector.on("end", () => m.edit({ components: [] }).catch(() => {}));
  },
};
