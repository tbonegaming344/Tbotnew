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
  const heroEmbed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Green");
  if (footer) heroEmbed.setFooter({ text: footer });
  return heroEmbed;
}
function createCategoryEmbed(name, deckNames, total, thumbnail) {
  const isAll = name.toLowerCase() === "all";
  const description =
    Array.isArray(deckNames) && deckNames.length
      ? deckNames.map((d) => `\n<@1043528908148052089> **${d}**`).join("")
      : "No decks available";
  return new EmbedBuilder()
    .setTitle(isAll ? "Green Shadow Decks" : `Green Shadow ${name} Decks`)
    .setDescription(
      isAll
        ? `All Green Shadow decks in Tbot are:${description}`
        : `My ${name} decks for Green Shadow are: ${description}`
    )
    .setThumbnail(thumbnail)
    .setColor("Green")
    .setFooter({
      text: isAll
        ? `Green Shadow has ${total} total decks in Tbot\nPlease click on the buttons below to navigate through the decks.`
        : `Green Shadow has ${total} total ${name} decks in Tbot\nPlease click on the buttons below to navigate through the decks.`,
    });
}
function buildDeckEmbed(row) {
  const deckEmbed = new EmbedBuilder()
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
    .setColor("White");
  if (
    row.image &&
    typeof row.image === "string" &&
    row.image.startsWith("http")
  )
    deckEmbed.setImage(row.image);
  return deckEmbed;
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
  name: `greenshadow`,
  aliases: [`gs`, `green`, `shadow`, `penelopea`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    // fetch DB once and build automation
    const [rows] = await db.query("SELECT * FROM gsdecks");
    if (!rows || rows.length === 0)
      return message.channel.send(
        "No Green Shadow decks found in the database."
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
      "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png";
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
    const gs = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/2/26/GreenShadowBYL.png/revision/latest?cb=20200704033327"
      )
      .setTitle(
        "Green Shadow | <:MegaGrow:1062501412992458802><:Smarty:1062502890448638022>"
      )
      .setDescription("**\\- Pea Hero  -**")
      .setColor("Green")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Big Chill <:Smarty:1062502890448638022>\n <:freeze:1323059404874055774>__Freeze__ a Zombie. \n Draw a card. \n Whirlwind <:Smarty:1062502890448638022> \n __Bounce__ a random Zombie. \n Embiggen <:MegaGrow:1062501412992458802> \n A Plant gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Precision Blast <:MegaGrow:1062501412992458802><:Smarty:1062502890448638022> \n Attack for 5 damage in the middle lane.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Little known fact: When she takes off the cape and mask, she goes by the name Penelopea.",
        }
      );

    const helpgsButton = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpgs")
        .setLabel("Green Shadow Decks")
        .setStyle(ButtonStyle.Success)
        .setEmoji("<a:GreenShadow:1100168011270328390>")
    );

    const m = await message.channel.send({
      embeds: [gs],
      components: [helpgsButton],
    });

    const filter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter });

    collector.on("collect", async (i) => {
      try {
        if (i.customId === "helpgs" && i.isButton()) {
          const select = new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder(
              "Select an option below to view Green Shadow's Decklists"
            )
            .addOptions(
              new StringSelectMenuOptionBuilder()
                .setLabel("Budget Deck")
                .setValue("budget")
                .setDescription("Plant Decks that are cheap for new players")
                .setEmoji("💰"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Competitive Deck")
                .setValue("comp")
                .setDescription("Some of the Best  Decks in the game")
                .setEmoji("<:compemote:1325461143136764060>"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Ladder Deck")
                .setValue("ladder")
                .setDescription("Decks that mostly only good for ranked games"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Meme Decks")
                .setValue("meme")
                .setDescription("Decks that are built off a weird/fun combo"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Aggro Decks")
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
                .setLabel("Midrange Deck")
                .setValue("midrange")
                .setDescription(
                  "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
                ),
              new StringSelectMenuOptionBuilder()
                .setLabel("All Green Shadow Decks")
                .setValue("all")
                .setDescription("View All Green Shadow Decks")
                .setEmoji("<a:GreenShadow:1100168011270328390>")
            );

          // present the select menu (replace helprb button)
          await i.update({
            embeds: [
              createHelpEmbed(
                "Green Shadow Decks",
                `Select a category below to view Green Shadow decks — Green Shadow has ${normalized.length} total decks.`,
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
        console.error("Green Shadow collector error:", err);
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
