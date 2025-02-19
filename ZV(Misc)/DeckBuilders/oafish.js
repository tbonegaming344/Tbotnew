const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `oafish`,
  aliases: [`oafishdecks`, `oafishhelp`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechhacontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mc")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["mechacontrol"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select mechacontrol
from rbdecks rb`);
    let user = await client.users.fetch("727772762776797248");
    let oa = new EmbedBuilder()
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
    let mechacontrol = new EmbedBuilder()
    .setTitle(`${result[5].mechacontrol}`)
		.setDescription(`${result[3].mechacontrol}`)
		.setFooter({text: `${result[2].mechacontrol}`})
		.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].mechacontrol}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].mechacontrol}`,
			inline: true
		},{
			name: "Deck Cost",
			value:`${result[1].mechacontrol}`,
			inline: true
		})
		.setImage(`${result[4].mechacontrol}`)
    const m = await message.channel.send({ embeds: [oa], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "mc" || i.customId == "mechacontrol") {
        await i.update({ embeds: [mechacontrol], components: [mc] });
      }
      if (i.customId == "helpo" || i.customId == "help") {
        await i.update({ embeds: [oa], components: [row] });
      }
    });
  },
};
