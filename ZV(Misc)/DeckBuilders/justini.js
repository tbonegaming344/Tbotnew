const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `justini12`,
  aliases: [
    `justinidecks`,
    `helpjustini`,
    `justinihelp`,
    `decksmadebyjustini`,
    `justini`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("winrate100")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wr100")
         .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wr100 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpj")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["100wr"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select wr100
from gsdecks gs`);
    let user = await client.users.fetch("112000146107113472");
    let just = new EmbedBuilder()
    .setTitle(`${user.displayName} Decks`)
    .setDescription(
      `My commands for decks made by ${user.displayName} are ${toBuildString}`
    )
    .setFooter({
      text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
    let winrate = new EmbedBuilder()
    .setTitle(`${result[5].wr100}`)
    .setDescription(`${result[3].wr100}`)
    .setFooter({text: `${result[2].wr100}`})
        .addFields({
        name: "Deck Type",
        value: `${result[6].wr100}`,
        inline: true
        },
        {
        name: "Archetype",
        value: `${result[0].wr100}`,
        inline: true
        },
        {
          name: "Deck Cost", 
          value: `${result[1].wr100}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].wr100}`)
    const m = await message.channel.send({ embeds: [just], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
     if(i.customId == "wr100" || i.customId == "winrate100"){
      await i.update({ embeds: [winrate], components: [wr100] });
     }
     if(i.customId == "helpj" || i.customId == "help"){
      await i.update({ embeds: [just], components: [row] });
     }
    });
  },
};
