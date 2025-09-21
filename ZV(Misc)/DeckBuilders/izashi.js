const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const db = require("../../index.js");
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
module.exports = {
  name: `izashi`,
  aliases: [`decksmadebyizashi`, `izashidecks`, `helpizashi`, `izashihelp`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const color = "#DAB1DA";
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ws")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ws = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpi")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["watersports"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [rows] = await db.query(
      `SELECT * from bfdecks where creator like '%izashi%'`
    );
    if (!rows || rows.length === 0) {
      return message.channel.send("No Izashi decks found in the database.");
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
    const user = await client.users.fetch("459030035295109120");
    const izashi = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor(color);
    const watersports = buildDeckEmbed(normalized[0], color);
    const m = await message.channel.send({
      embeds: [izashi],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ws" || i.customId == "watersports") {
        await i.update({ embeds: [watersports], components: [ws] });
      } else if (i.customId == "helpi" || i.customId == "help") {
        await i.update({ embeds: [izashi], components: [row] });
      }
    });
  },
};
