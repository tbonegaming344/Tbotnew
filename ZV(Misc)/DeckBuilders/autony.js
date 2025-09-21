const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const db = require("../../index.js");
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
module.exports = {
  name: `autony`,
  aliases: [`decksmadebyautony`, `helpautony`, `autonyhelp`, `autonydecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const color = "#90D5FF";
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cardsbolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cbolt")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cbolt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpa")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["cardsbolt"];
    const toBuildString = decks
      .map((d) => `\n<@1043528908148052089> **${d}**`)
      .join("");
    const [rows] = await db.query(
      "SELECT * from rbdecks where creator like '%autony%'"
    );
    if (!rows || rows.length === 0) {
      return message.channel.send("No Autony decks found in the database.");
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
    const user = await client.users.fetch("444572962209923072");
    const autony = new EmbedBuilder()
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
    const cardsbolt = buildDeckEmbed(normalized[0], color);
    const m = await message.channel.send({
      embeds: [autony],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cbolt" || i.customId == "cardsbolt") {
        await i.update({ embeds: [cardsbolt], components: [cbolt] });
      } else if (i.customId == "helpa" || i.customId == "help") {
        await i.update({ embeds: [autony], components: [row] });
      }
    });
  },
};
