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
  name: `rcch`,
  aliases: [
    `decksmadebyrcch`,
    `rcchhelp`,
    `rcchdecks`,
    `helprcch`,
    `rrchdecklists`,
    `decklistsmadebyrcch`,
    `rcchgaming`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healmidrose")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hmr")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hmr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpr")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "healmidrose",
    ]
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select hmr
from  rodecks ro;`);
    let user = await client.users.fetch("371765420576866304");
    let rcch = new EmbedBuilder()
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
    let healmidrose= new EmbedBuilder()
    .setTitle(`${result[5].hmr}`)
    .setDescription(`${result[3].hmr}`)
    .setFooter({ text: `${result[2].hmr}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].hmr}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].hmr}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].hmr}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].hmr}`);
    const m = await message.channel.send({ embeds: [rcch], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "hmr" || i.customId == "healmidrose") {
        await i.update({ embeds: [healmidrose], components: [hmr] });
      }
      if(i.customId == "helpr" || i.customId == "help") {
        await i.update({ embeds: [rcch], components: [row] });
      }
    });
  },
};
