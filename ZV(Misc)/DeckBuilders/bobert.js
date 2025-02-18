const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `bobert`,
  aliases: [
    `decksmadebybobert`,
    `helpbobert`,
    `boberthelp`,
    `bobdecks`,
    `decksmadebybob`,
    `helpbob`,
    `bobhelp`,
    `bobertdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bsmash")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("b")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const b = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbob")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["bobertsmash"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
	let [result] = await db.query(`SELECT bobertsmash FROM smdecks`)
    let user = await client.users.fetch("431926926572257290");
    let bob = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let bsmash = new EmbedBuilder()
    .setTitle(`${result[5].bobertsmash}`)
    .setDescription(`${result[3].bobertsmash}`)
    .setFooter({text: `${result[2].bobertsmash}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].bobertsmash}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].bobertsmash}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].bobertsmash}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].bobertsmash}`)
    const m = await message.channel.send({ embeds: [bob], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "b") {
        await i.update({ embeds: [bsmash], components: [b] });
      }
      if (i.customId == "bsmash") {
        await i.update({ embeds: [bsmash], components: [b] });
      }
      if (i.customId == "helpbob") {
        await i.update({ embeds: [bob], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [bob], components: [row] });
      }
    });
  },
};
