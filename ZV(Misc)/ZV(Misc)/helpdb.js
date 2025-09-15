const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  MessageFlags,
} = require("discord.js");
const db = require("../../index.js");

// --- Helper functions (same as helpct.js, but generic for plants/zombies) ---
function createCategoryEmbed(type, name, deckNames, total, thumbnail) {
  // Sort deckNames alphabetically, remove spaces and caps
  const sortedDeckNames = (Array.isArray(deckNames) ? deckNames : [])
    .map((d) => d.replace(/\s+/g, "").toLowerCase())
    .sort((a, b) => a.localeCompare(b));
  const isAll = name.toLowerCase().includes("all");
  const description = sortedDeckNames.length
    ? sortedDeckNames.map((d) => `\n<@1043528908148052089> **${d}**`).join("")
    : "No decks available";
  return new EmbedBuilder()
    .setTitle(isAll ? `${type} Decks` : `${type} ${name} Decks`)
    .setDescription(
      isAll
        ? `All ${type} decks in Tbot are:${description}`
        : `My ${name} decks for ${type} are: ${description}`
    )
    .setThumbnail(thumbnail)
    .setColor(type === "Plants" ? "Green" : "Purple")
    .setFooter({
      text: isAll
        ? `${type} has ${total} total decks in Tbot\nPlease click on the buttons below to navigate through the decks.`
        : `${type} have ${total} total ${name} decks in Tbot\nPlease click on the buttons below to navigate through the decks.`,
    });
}

function buildDeckEmbed(row, type) {
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
    .setColor(type === "Plant" ? "Green" : "Purple");

  if (
    row.image &&
    typeof row.image === "string" &&
    row.image.startsWith("http")
  ) {
    embed.setImage(row.image);
  }
  return embed;
}

function buildNavRow(category, currentIndex, total, specialCategories) {
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

  if (leftId === rightId) {
    rightId = `${rightId}_alt`;
  }

  const left = new ButtonBuilder().setEmoji("⬅️");
  const right = new ButtonBuilder().setEmoji("➡️");

  left
    .setStyle(
      leftId.startsWith("back_to_list")
        ? ButtonStyle.Secondary
        : ButtonStyle.Primary
    )
    .setCustomId(leftId);
  right
    .setStyle(
      rightId.startsWith("back_to_list")
        ? ButtonStyle.Secondary
        : ButtonStyle.Primary
    )
    .setCustomId(rightId);

  return new ActionRowBuilder().addComponents(left, right);
}

module.exports = {
  name: `helpdb`,
  aliases: [
    `dbhelp`,
    `dbcommands`,
    `dbdecks`,
    `ladderdeck`,
    `decksdb`,
    `database`,
    `db`,
    `databasedecks`,
    `databasehelp`,
    `helpdatabase`,
    `alldecks`,
    `competitive`,
    `comp`,
    `decks`,
    `decklists`,
    `deck`,
    `competitivedecks`,
    `ladder`,
    `ladderdecks`,
    `aggro`,
    `aggrodecks`,
    `memeplantdecks`,
    `helpladder`,
    `allzombiedecks`,
    `allplantsdecks`,
    `meme`,
    `control`,
    `controldecks`,
    `combo`,
    `combodecks`,
    `midrange`,
    `midrangedecks`,
    `meme`,
    `memedecks`,
    `memedeck`,
    `memedb`,
    `tbotdb`,
    `helpaggro`,
    `competitivedecklists`,
    `competitiveplantdecks`,
    `budget`,
    `budgetdecks`,
    `helpmeme`,
    `ladderplantdecks`,
    `competitivezombiedecks`,
    `competitiveplants`,
    `all`,
    `budgethelp`,
    `plantdecks`,
    `zombiedecks`,
    `decklist`,
    `decklists`,
    `tempo`,
    `tempodecks`,
    `decktype`,
    `decktypes`,
    `archetype`,
    `archetypes`,
    `budgetdb`,
    `deckdb`,
    `plantdeck`,
    `zombiedeck`,
    `plants`,
    `zombies`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    // --- 1. Fetch decks from multiple tables ---
    // Plant tables
    const plantTables = [
      "bcdecks",
      "ccdecks",
      "ctdecks",
      "czdecks",
      "gkdecks",
      "gsdecks",
      "ncdecks",
      "rodecks",
      "sfdecks",
      "spdecks",
      "wkdecks",
    ];
    // Zombie tables
    const zombieTables = [
      "bfdecks",
      "ebdecks",
      "hgdecks",
      "ifdecks",
      "imdecks",
      "ntdecks",
      "pbdecks",
      "rbdecks",
      "sbdecks",
      "smdecks",
      "zmdecks",
    ];

    // Helper to fetch and normalize decks from a table
    async function fetchDecksFromTable(table, type) {
      try {
        const result = await db.query(
          `SELECT * FROM ${table} ORDER BY name COLLATE utf8mb4_general_ci ASC`
        );
        const rows = Array.isArray(result) ? result[0] : [];
        return (rows || []).map((r) => {
          const rawType = (r.type || "").toString();
          const rawArch = (r.archetype || "").toString();
          const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
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
            deckType: type,
          };
        });
      } catch (err) {
        console.error(`Error querying table ${table}:`, err);
        return [];
      }
    }

    // Fetch all decks
    let plantDecks = [];
    for (const table of plantTables) {
      plantDecks = plantDecks.concat(await fetchDecksFromTable(table, "Plant"));
    }
    let zombieDecks = [];
    for (const table of zombieTables) {
      zombieDecks = zombieDecks.concat(
        await fetchDecksFromTable(table, "Zombie")
      );
    }

    // --- 2. Categorize decks ---
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

    // Build deck lists for each category and type
    const deckLists = {};
    for (const cat of categories) {
      // Sort deck objects by normalized name
      deckLists[`plant_${cat}`] = plantDecks
        .filter((r) => matchesCategory(r, cat))
        .sort((a, b) =>
          a.name
            .replace(/\s+/g, "")
            .toLowerCase()
            .localeCompare(b.name.replace(/\s+/g, "").toLowerCase())
        );
      deckLists[`zombie_${cat}`] = zombieDecks
        .filter((r) => matchesCategory(r, cat))
        .sort((a, b) =>
          a.name
            .replace(/\s+/g, "")
            .toLowerCase()
            .localeCompare(b.name.replace(/\s+/g, "").toLowerCase())
        );
    }

    // --- 3. Build category embeds ---
    const plantThumb =
      "https://media.discordapp.net/attachments/1044626284346605588/1358437770829369404/image.png";
    const zombieThumb =
      "https://media.discordapp.net/attachments/1044626284346605588/1358438184182092073/zombieicon.png";
    const categoryEmbeds = {};
    for (const cat of categories) {
      categoryEmbeds[`plant_${cat}`] = createCategoryEmbed(
        "Plant",
        cat === "comp"
          ? "Competitive"
          : cat.charAt(0).toUpperCase() + cat.slice(1),
        deckLists[`plant_${cat}`].map((r) => r.name),
        deckLists[`plant_${cat}`].length,
        plantThumb
      );
      categoryEmbeds[`zombie_${cat}`] = createCategoryEmbed(
        "Zombie",
        cat === "comp"
          ? "Competitive"
          : cat.charAt(0).toUpperCase() + cat.slice(1),
        deckLists[`zombie_${cat}`].map((r) => r.name),
        deckLists[`zombie_${cat}`].length,
        zombieThumb
      );
    }

    // --- 4. Select menu (keep as in prompt) ---
    const select = new StringSelectMenuBuilder()
      .setCustomId("starter")
      .setPlaceholder(
        "Select an option below to view certain Decktypes or archtypes!"
      )
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Plant Decks")
          .setDescription("Plant Decks that are cheap for new players")
          .setEmoji("💰")
          .setValue("budgetpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Plant Decks")
          .setDescription("Some of the Best Plant Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comppdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Plant Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladderpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Plant Decks")
          .setDescription("Plant Decks that are built off a weird/fun combo")
          .setValue("memepdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Zombie Decks")
          .setDescription("Zombie Decks that are cheap for new players")
          .setEmoji("💰")
          .setValue("budgetzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Zombie Decks")
          .setDescription("Some of the Best Zombie Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("compzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Zombie Decks")
          .setDescription("Zombie Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladderzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Zombie Decks")
          .setDescription("Zombie Decks that are built off a weird/fun combo")
          .setValue("memezdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Plant Decks")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggropdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Plant Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combopdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Plant Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("controlpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Plants Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrangepdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Plant Decks")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempopdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Zombie Decks")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggrozdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Zombie Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combozdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Zombie Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("controlzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Zombie Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrangezdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Zombie Decks")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempozdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Plant Decks")
          .setDescription("An option to view all Plant Decks")
          .setEmoji("<:allplants:1325472845907623976>")
          .setValue("allpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Zombie Decks")
          .setDescription("An otion to view all Zombie Decks")
          .setEmoji("<:allzombies:1325472034687418481>")
          .setValue("allzdecks")
      );
    const totalDecks = plantDecks.length + zombieDecks.length;
    // --- 5. Initial embed ---
    const embed = new EmbedBuilder()
      .setTitle("Tbot Database")
      .setDescription(
        `Please select option from select menus below to access the database
Note: the decks are in alphabetical order not by hero and there are ${totalDecks} decks in the databse with ${plantDecks.length} Plant Decks and ${zombieDecks.length} Zombie Decks.
Note: the decks are in alphabetical order not by hero`
      )
      .setColor("Random")
      .addFields(
        {
          name: "Budget Decks",
          value:
            "Good for when you don't want to spend money on the game and don't have a lot of sparks or a lot of the rarest cards in the game, but aren't as good as the top decks at the highest level of the game.",
        },
        {
          name: "Competitive Decks",
          value: "Some of the best decks in the game.",
        },
        {
          name: "Ladder Decks",
          value:
            "Useful for Ranked Online Multiplayer, but crumbles into more competitive decks.",
        },
        {
          name: "Meme Decks",
          value:
            "Not designed to be competitive, and never was, even during the deck building process. Was simply made for weird/fun combos and wasn't made with any competitive meta in mind.",
        }
      )
      .setImage(
        "https://media.discordapp.net/attachments/1044626284346605588/1356022131225268255/allheroes.jpg?ex=67eb0d85&is=67e9bc05&hm=6b685aabe10a85ef7c80cf09bced40bf6b671fda726522be203c7d2372203344&=&format=webp&width=1872&height=758"
      )
      .setFooter({ text: "Credit to Iceiboi for deck type explainations" });

    const m = await message.channel.send({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(select)],
    });

    // --- 6. Collector ---
    const filter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter });

    collector.on("collect", async (i) => {
      const specialCategories = [
        "plant_budget",
        "plant_comp",
        "plant_all",
        "plant_meme",
        "plant_aggro",
        "plant_midrange",
        "plant_combo",
        "plant_control",
        "zombie_comp",
        "zombie_all",
        "zombie_meme",
        "zombie_aggro",
        "zombie_midrange",
        "zombie_combo",
        "zombie_control",
      ];

      try {
        if (i.isStringSelectMenu()) {
          const selectMap = {
            budgetpdecks: "plant_budget",
            comppdecks: "plant_comp",
            ladderpdecks: "plant_ladder",
            memepdecks: "plant_meme",
            aggropdecks: "plant_aggro",
            combopdecks: "plant_combo",
            controlpdecks: "plant_control",
            midrangepdecks: "plant_midrange",
            tempopdecks: "plant_tempo",
            allpdecks: "plant_all",
            budgetzdecks: "zombie_budget",
            compzdecks: "zombie_comp",
            ladderzdecks: "zombie_ladder",
            memezdecks: "zombie_meme",
            aggrozdecks: "zombie_aggro",
            combozdecks: "zombie_combo",
            controlzdecks: "zombie_control",
            midrangezdecks: "zombie_midrange",
            tempozdecks: "zombie_tempo",
            allzdecks: "zombie_all",
          };
          const key = selectMap[i.values[0]];
          const list = deckLists[key] || [];
          if (!key || !categoryEmbeds[key])
            return i.reply({
              content: "Invalid selection.",
              flags: MessageFlags.Ephemeral,
            });
          if (list.length === 0)
            return i.reply({
              content: "No decks in that category.",
              flags: MessageFlags.Ephemeral,
            });
          // If only one deck, reply with that deck's embed
          if (
            list.length === 1 &&
            typeof list[0] === "object" &&
            list[0] !== null
          ) {
            const singleEmbed = buildDeckEmbed(list[0], list[0].deckType);
            return i.reply({
              embeds: [singleEmbed],
              flags: MessageFlags.Ephemeral,
            });
          }
          // Otherwise, show category embed and nav buttons
          const catEmbed = categoryEmbeds[key];
          const firstIndex = 0;
          const lastIndex = Math.max(0, list.length - 1);
          const leftId = `nav_${key}_${lastIndex}${
            lastIndex === firstIndex ? "_alt" : ""
          }`;
          const rightId = `nav_${key}_${firstIndex}`;
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

        if (i.isButton()) {
          const parts = i.customId.split("_");
          const action = parts[0];

          if (action === "nav") {
            const category = parts.slice(1, -1).join("_");
            const index = Math.max(
              0,
              Math.min(
                parseInt(parts[parts.length - 1], 10),
                (deckLists[category] || []).length - 1
              )
            );
            const list = deckLists[category] || [];
            if (!list[index])
              return i.reply({
                content: "Deck not found.",
                flags: MessageFlags.Ephemeral,
              });
            const embed = buildDeckEmbed(list[index], list[index].deckType);
            const nav = buildNavRow(
              category,
              index,
              list.length,
              specialCategories
            );
            return i.update({ embeds: [embed], components: [nav] });
          }

          // Add this block to go back to the category embed (like helpbf)
          if (action === "back" && parts[1] === "to" && parts[2] === "list") {
            const category = parts.slice(3).join("_");
            const list = deckLists[category] || [];
            const catEmbed = categoryEmbeds[category];
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
