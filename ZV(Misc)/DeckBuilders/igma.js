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
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
module.exports = {
  name: `igma`,
  aliases: [
    `igmadecks`,
    `igmahelp`,
    `helpigma`,
    `decksmadebyigma`,
    `igmarockers`,
    `decksigma`,
    `deckigma`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const color = "Green";
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("igmablobchum")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ibc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ibc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpi")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["igmablobchum"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [rows] = await db.query(
      `select * from rbdecks where creator like '%igma%'`
    );
    if (!rows || rows.length === 0) {
      return message.channel.send("No Igma decks found in the database.");
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
    const user = await client.users.fetch("447911877020876802");
    const igma = new EmbedBuilder()
      .setTitle("Igma Decks")
      .setDescription(`My commands for decks made by Igma are ${toBuildString}`)
      .setFooter({
        text: `To view the Decks Made By Igma please click on the buttons below!
Note: Igma has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor(color);
    const ichum = buildDeckEmbed(normalized[0], color);
    const m = await message.channel.send({ embeds: [igma], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ibc" || i.customId == "igmablobchum") {
        await i.update({ embeds: [ichum], components: [ibc] });
      } else if (i.customId == "helpi" || i.customId == "help") {
        await i.update({ embeds: [igma], components: [row] });
      }
    });
  },
};
