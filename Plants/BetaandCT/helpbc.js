const {
  ActionRowBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
// --- Helpers ---
const createCategoryEmbed = require("../../Utilities/createCategoryEmbed.js");
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
const buildNavRow = require("../../Utilities/buildNavRow.js");
module.exports = {
  name: `helpbc`,
  aliases: [
    `bchelp`,
    `bccommands`,
    `commandsbc`,
    `helpbeta`,
    `helpcarrotina`,
    `helpbetacarrotina`,
    `betacarrotinahelp`,
    `beta-carrotinadecks`,
    `betacarrotinadecks`,
    `bcdecks`,
    `betacarrotinacommands`,
    `betadecks`,
    `betahelp`,
    `carrotinadecks`,
    `bcdeck`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    
    const hero = "Beta Carrotina";
    const categoryColor = "#964B00";
    const deckColor = "Orange";
    // fetch rows: each row is a deck
    const [rows] = await db.query("SELECT * FROM bcdecks");
    if (!rows || rows.length === 0) {
      return message.channel.send(
        "No Beta Carrotina decks found in the database."
      );
    }
  let allDecks = [];
  for (const r of rows) {
      const rawType = (r.type || "").toString();
      const rawArch = (r.archetype || "").toString();
      const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, ""); 
      allDecks.push({
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
      });
    }

    // Group decks by categories dynamically based on what's available
      const availableCategories = ["all"];
      const deckLists = { all: allDecks };

      // Add categories that actually exist in the results
      const categoryChecks = [
        { key: "budget", check: (deck) => deck.typeNorm.includes("budget") },
        { key: "comp", check: (deck) => deck.typeNorm.includes("competitive") || deck.typeNorm.includes("comp") },
        { key: "ladder", check: (deck) => deck.typeNorm.includes("ladder") },
        { key: "meme", check: (deck) => deck.typeNorm.includes("meme") },
        { key: "aggro", check: (deck) => deck.archetypeNorm.includes("aggro") },
        { key: "combo", check: (deck) => deck.archetypeNorm.includes("combo") },
        { key: "control", check: (deck) => deck.archetypeNorm.includes("control") },
        { key: "midrange", check: (deck) => deck.archetypeNorm.includes("midrange") },
        { key: "tempo", check: (deck) => deck.archetypeNorm.includes("tempo") }
      ];

      for (const { key, check } of categoryChecks) {
        const filtered = allDecks.filter(check);
        if (filtered.length > 0) {
          availableCategories.push(key);
          deckLists[key] = filtered;
        }
      }

      // Create select menu options only for available categories
      const selectOptions = [];

      // Add category options that have decks
      const categoryLabels = {
        budget: { label: "Budget Decks", emoji: "💰", desc: "Decks that are cheap for new players" },
        comp: { label: "Competitive Decks", emoji: "🏆", desc: "Some of the best decks in the game" },
        ladder: { label: "Ladder Decks", emoji: "🪜", desc: "Decks that are mostly only good for ranked games" },
        meme: { label: "Meme Decks",  emoji: "😂", desc: "Decks built for fun/weird combos" },
        aggro: { label: "Aggro Decks", emoji: "⚡", desc: "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7." },
        combo: { label: "Combo Decks",  emoji: "🧩", desc: "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)." },
        control: { label: "Control Decks",  emoji: "🛡️", desc: 'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.' },
        midrange: { label: "Midrange Decks",  emoji: "⚖️", desc: "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game" },
        tempo: { label: "Tempo Decks",  emoji: "🏃‍♂️", desc: "Focuses on slowly building a big board, winning trades and overwhelming the opponent." }
      };

      for (const cat of availableCategories.slice(1)) { // Skip "all" since we already added it
        const config = categoryLabels[cat];
        if (config && deckLists[cat].length > 0) {
          selectOptions.push(
            new StringSelectMenuOptionBuilder()
              .setLabel(`${config.label} (${deckLists[cat].length})`)
              .setValue(cat)
              .setDescription(config.desc)
              .setEmoji(config.emoji)
          );
        }
      }
           // Always add "All" option
      selectOptions.push(
        new StringSelectMenuOptionBuilder()
          .setLabel(`All Decks (${allDecks.length})`)
          .setValue("all")
          .setEmoji("📋")
          .setDescription(`View all beta carrotina decks`)
      );
      const select = new StringSelectMenuBuilder()
        .setCustomId(`betacarrotina_deck_select`)
        .setPlaceholder(`Select a category to view Beta Carrotina decks`)
        .addOptions(selectOptions);
    // thumbnail
    const thumb =
      "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist";

    // create category overview embeds (used when nav hits ends for special cats)
    const categoryEmbeds = {};
    for (const cat of availableCategories) {
      const pretty =
        cat === "comp"
          ? "Competitive"
          : cat.charAt(0).toUpperCase() + cat.slice(1);
      categoryEmbeds[cat] = createCategoryEmbed(
        hero,
        categoryColor,
        pretty,
        deckLists[cat].map((r) => r.name.replaceAll(/\s+/g, "").toLowerCase()),
        deckLists[cat].length,
        thumb
      );
    }
    const m = await message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("Beta Carrotina Decks")
          .setDescription(
            `To view the Beta Carrotina decks please select an option from the select menu below!\nNote: Beta Carrotina has ${allDecks.length} total decks in Tbot`
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
            const index = Number.parseInt(parts[2], 10);
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
