const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `glassinabin`,
  aliases: [`glassdecks`, `glasshelp`, `helpglass`, `glass`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uno")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("un")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const un = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpg")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["uno"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select uno from ifdecks`);
    const user = await client.users.fetch("1384235669697724579");
    const glass = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My decks made by ${user.displayName} are ${toBuildString}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("#e0e0de")
      .setFooter({
        text: `To view Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
        const uno = new EmbedBuilder()
        .setTitle(`${result[5].uno}`)
        .setDescription(`${result[3].uno}`)
        .setFooter({ text: `${result[2].uno}` })
        .addFields(
            {
            name: "Deck Type",
            value: `${result[6].uno}`,
            inline: true,
            },
            {
            name: "Archetype",
            value: `${result[0].uno}`,
            inline: true,
            },
            {
            name: "Deck Cost",
            value: `${result[1].uno}`,
            inline: true,
            }
        )
      .setColor("#e0e0de")
      .setImage(`${result[4].uno}`);
    const m = await message.channel.send({ embeds: [glass], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "un" || i.customId == "uno") {
        await i.update({ embeds: [uno], components: [un] });
      } else if (i.customId == "helpg" || i.customId == "help") {
        await i.update({ embeds: [glass], components: [row] });
      }
    });
  },
};