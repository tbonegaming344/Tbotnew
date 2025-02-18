const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `chel`,
  aliases: [
    `decksmadebychel`,
    `helpchel`,
    `chelhelp`,
    `cheldecklists`,
    `cheldecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kleap")
    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kl")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const kl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpc")
    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
      .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [ "kingleap"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select kingleap, comboticia
		from rbdecks rb 
		inner join imdecks im 
		on (rb.deckinfo = im.deckinfo)`);
    let user = await client.users.fetch("294599048722120705");
    let chel = new EmbedBuilder()
    .setTitle(`${user.displayName}  Decks`)
    .setDescription(
      `My  decks made by ${user.displayName} are ${toBuildString}`
    )
    .setFooter({
      text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
    let kleap = new EmbedBuilder()
    .setTitle(`${result[5].kingleap}`)
    .setDescription(`${result[3].kingleap}`)
    .setFooter({text:`${result[2].kingleap}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].kingleap}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].kingleap}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].kingleap}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`	${result[4].kingleap}`)
    const m = await message.channel.send({ embeds: [chel], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpc") {
        await i.update({ embeds: [chel], components: [row] });
      }
      if (i.customId == "kl") {
        await i.update({ embeds: [kleap], components: [kl] });
      }
      if (i.customId == "kleap") {
        await i.update({ embeds: [kleap], components: [kl] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [chel], components: [row] });
      }
    });
  },
};
