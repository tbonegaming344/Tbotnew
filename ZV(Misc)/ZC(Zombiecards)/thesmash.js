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
    .setColor("Orange");
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
    .setTitle(isAll ? "Smash Decks" : `Smash ${name} Decks`)
    .setDescription(
      isAll
        ? `All Smash decks in Tbot are:${description}`
        : `My ${name} decks for Smash are: ${description}`
    )
    .setThumbnail(thumbnail)
    .setColor("Orange")
    .setFooter({
      text: isAll
        ? `Smash has ${total} total decks in Tbot\nPlease click on the buttons below to navigate through the decks.`
        : `Smash has ${total} total ${name} decks in Tbot\nPlease click on the buttons below to navigate through the decks.`,
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
    .setColor("Blue");
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
  name: `thesmash`,
  aliases: [`smash`, `sm`, `ts`, `the-smash`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    // fetch DB once and build automation
    const [rows] = await db.query("SELECT * FROM smdecks");
    if (!rows || rows.length === 0)
      return message.channel.send("No Smash decks found in the database.");

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
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543";
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
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle(
        "The Smash | <:Hearty:1062501636557242429><:Beastly:1062500894744264714>"
      )
      .setDescription("** - Gargantuar Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Heroic Health <:Hearty:1062501636557242429> \n Heal your Hero for 6. \n Possessed <:Hearty:1062501636557242429> \n A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n Galvanize <:Beastly:1062500894744264714> \n A Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Slammin' Smackdown <:Hearty:1062501636557242429><:Beastly:1062500894744264714> \n Destroy a Plant with 4<:Strength:1062501774612779039> or less.  ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "The Smash enjoys...SMASHING!",
        }
      )
      .setColor("Orange");
    const helpsmButton = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsm")
        .setLabel("Smash Decks")
        .setStyle(ButtonStyle.Success)
        .setEmoji("<:The_SmashH:1088162519958425670>")
    );

    const m = await message.channel.send({
      embeds: [embed],
      components: [helpsmButton],
    });

    const filter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter });

    collector.on("collect", async (i) => {
      try {
        // pressed the initial helpsm button -> show the select menu (same UI helpsm uses)
        if (i.customId === "helpsm" && i.isButton()) {
          const select = new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Select an option below to view Smash's decklists")
            .addOptions(
              new StringSelectMenuOptionBuilder()
                .setLabel("Budget Deck")
                .setValue("budget")
                .setDescription("Decks that are cheap for new players")
                .setEmoji("💰"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Competitive Deck")
                .setValue("comp")
                .setDescription("Some of the Best Decks in the game")
                .setEmoji("<:compemote:1325461143136764060>"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Ladder Deck")
                .setValue("ladder")
                .setDescription("Decks that mostly only good for ranked games")
                .setEmoji("<:ladder:1271503994857979964>"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Meme Decks")
                .setValue("meme")
                .setDescription("Decks that are built off a weird/fun combo"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Aggro Deck")
                .setValue("aggro")
                .setDescription(
                  "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
                ),
              new StringSelectMenuOptionBuilder()
                .setLabel("Combo Decks")
                .setValue("combo")
                .setDescription(
                  "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
                ),
              new StringSelectMenuOptionBuilder()
                .setLabel("Control Decks")
                .setValue("control")
                .setDescription(
                  'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
                ),
              new StringSelectMenuOptionBuilder()
                .setLabel("Midrange Decks")
                .setValue("midrange")
                .setDescription(
                  "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
                ),
              new StringSelectMenuOptionBuilder()
                .setLabel("Tempo Deck")
                .setValue("tempo")
                .setDescription(
                  "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
                ),
              new StringSelectMenuOptionBuilder()
                .setLabel("All Smash Decks")
                .setValue("all")
                .setDescription("All of the Smash decks")
                .setEmoji("<:The_SmashH:1088162519958425670>")
            );

          // present the select menu (replace helprb button)
          await i.update({
            embeds: [
              createHelpEmbed(
                "Smash Decks",
                `Select a category to view Smash Decks — Smash has ${normalized.length} total decks.`,
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
