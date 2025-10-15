const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const db = require("../../index.js");
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
module.exports = {
  name: `div`,
  aliases: [`decksmadebydiv`, `helpdiv`, `divhelp`, `divdecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const color = "Yellow";
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("radiotherapy")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("radio")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const radio= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpd")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["radiotherapy"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@${client.user.id}> **${deck}**`;
    }
    const [rows] = await db.query(
      "SELECT * from spdecks where creator like '%div%'"
    );
    if (!rows || rows.length === 0) {
      return message.channel.send("No div decks found in the database.");
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
    const user = await client.users.fetch("935789459637686302");
    const div = new EmbedBuilder()
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
    const radiotherapy = buildDeckEmbed(normalized[0], color);
    const m = await message.channel.send({
      embeds: [div],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "radiotherapy" || i.customId == "radio") {
        await i.update({ embeds: [radiotherapy], components: [radio] });
      } else if (i.customId == "helpd" || i.customId == "help") {
        await i.update({ embeds: [div], components: [row] });
      }
    });
  },
};
