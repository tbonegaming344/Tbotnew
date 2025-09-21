const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const db = require("../../index.js");
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
module.exports = {
  name: `lolatopia`,
  aliases: [
    `decksmadebylolatopia`,
    `lolatopiadecks`,
    `lolatopiahelp`,
    `helplolatopia`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const color = "Green";
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dinocounter")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dcounter")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dcounter = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpl")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["dinocounter"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [rows] = await db.query(
      `select * from bcdecks where creator like '%lolatopia%'`
    );
    if (!rows || rows.length === 0) {
      return message.channel.send("No Lolatopia decks found in the database.");
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
    const user = await client.users.fetch("256910306003910658");
    const lolatopia = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor(color);
    const dinoCounter = buildDeckEmbed(normalized[0], color);
    const m = await message.channel.send({
      embeds: [lolatopia],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "dcounter" || i.customId == "dinocounter") {
        await i.update({ embeds: [dinoCounter], components: [dcounter] });
      } else if (i.customId == "helpl" || i.customId == "help") {
        await i.update({ embeds: [lolatopia], components: [row] });
      }
    });
  },
};
