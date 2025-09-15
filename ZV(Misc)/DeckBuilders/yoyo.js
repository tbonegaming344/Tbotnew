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
    .setColor("#ffcd59");

  if (
    row.image &&
    typeof row.image === "string" &&
    row.image.startsWith("http")
  ) {
    embed.setImage(row.image);
  }
  return embed;
}
module.exports = {
  name: `yoyo`,
  aliases: [
    `yoyodecks`,
    `helpyoyo`,
    `helpyoyo`,
    `decksmadebyyoyo`,
    `yoyodecklists`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
     const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("reflourished")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rfl")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rfl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpyoyo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["reflourished"];
    const toBuildString = decks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
    const [rows] = await db.query(`select *
from ccdecks where creator like '%yoyo%'`);
if (!rows || rows.length === 0) {
      return message.channel.send("No Yoyo decks found in the database.");
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
const user = await client.users.fetch("1255818880211882077");
    const yoyo = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("#ffcd59")
    const reflourished = buildDeckEmbed(normalized[0]);
    const m = await message.channel.send({
      embeds: [yoyo],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "reflourished" || i.customId == "rfl") {
        await i.update({ embeds: [reflourished], components: [rfl] });
      }
      else if (i.customId == "help" || i.customId == "helpyoyo") {
        await i.update({ embeds: [yoyo], components: [row] });
      }
    });
  },
};
