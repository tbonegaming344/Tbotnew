const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `regster`,
  aliases: [
    `decksmadebyregster`,
    `regsterdecks`,
    `theregster`,
    `helpregster`,
    `regsterhelp`,
    `regester`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("professorpackage")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("propack")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const propack= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpreg")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
 let decks = [
  "professorpackage",
 ]
 let toBuildString = "";
  for (let i = 0; i < decks.length; i++) {
    toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
  }
    let [result] =
      await db.query(`select professorpackage from pbdecks pb`);
      let reg = new EmbedBuilder()
      .setTitle(`Regster Decks`)
        .setDescription(
          `My commands for decks made by Regster are ${toBuildString}`
        )
        .setFooter({
          text: `To view the Decks Made By Regster please use the commands listed above or click on the buttons below!
Note: Regster has ${decks.length} total decks in Tbot`,
        })
        .setColor("Random");
    let professorpackage = new EmbedBuilder()
    .setTitle(`${result[5].professorpackage}`)
    .setDescription(`${result[3].professorpackage}`)
    .setFooter({ text: `${result[2].professorpackage}` })
    .setColor("Random")
    .setImage(`${result[4].professorpackage}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].professorpackage}`,
      inline: true
    },{ 
      name: "Archetype",
      value: `${result[0].professorpackage}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].professorpackage}`,
      inline: true
    });
    const m = await message.channel.send({ embeds: [reg], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "propack" || i.customId == "professorpackage"){
        await i.update({ embeds: [professorpackage], components: [propack] });
      }
      if(i.customId == "helpreg" || i.customId == "help"){
        await i.update({ embeds: [reg], components: [row] });
      }
    });
  },
};
