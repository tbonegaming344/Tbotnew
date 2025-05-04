const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const db = require("../../index.js");
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
    const [result] = await db.query(`select dinocounter from bcdecks`);
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
      .setColor("Green");
    const dinoCounter = new EmbedBuilder()
      .setTitle(`${result[5].dinocounter}`)
      .setDescription(`${result[3].dinocounter}`)
      .setFooter({ text: `${result[2].dinocounter}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].dinocounter}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].dinocounter}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].dinocounter}`,
          inline: true,
        }
      )
      .setColor("Green")
      .setImage(`${result[4].dinocounter}`);

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
