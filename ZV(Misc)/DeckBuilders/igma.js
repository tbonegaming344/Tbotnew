const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
const db = require("../../index.js");
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
    const decks = [
      "igmablobchum",
    ];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] =
      await db.query(`select igmablobchum from rbdecks rb`);
    const user = await client.users.fetch("447911877020876802");
    const igma = new EmbedBuilder()
      .setTitle("Igma Decks")
      .setDescription(`My commands for decks made by Igma are ${toBuildString}`)
      .setFooter({text: `To view the Decks Made By Igma please click on the buttons below!
Note: Igma has ${decks.length} total decks in Tbot`})
      .setThumbnail(user.displayAvatarURL())
      .setColor("Green");
    const ichum = new EmbedBuilder()
    .setTitle(`${result[5].igmablobchum}`)
    .setDescription(`${result[3].igmablobchum}`)
    .setFooter({text: `${result[2].igmablobchum}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].igmablobchum}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].igmablobchum}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].igmablobchum}`,
          inline: true
        })
      .setColor("Green")
      .setImage(`${result[4].igmablobchum}`)
    const m = await message.channel.send({ embeds: [igma], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "ibc" || i.customId == "igmablobchum"){
        await i.update({ embeds: [ichum], components: [ibc] });
      }
      else if(i.customId == "helpi" || i.customId == "help"){
        await i.update({ embeds: [igma], components: [row] });
      }
    });
  },
};
