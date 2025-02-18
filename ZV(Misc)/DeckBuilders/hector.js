const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `hector`,
  aliases: [`decksmadebyhector`, `helphector`, `hectorhelp`, `hectordecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kshe")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ks")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ks = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helph")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [ "kitchenhg"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select  kitchenhg from  hgdecks`);
    let hect = new EmbedBuilder()
      .setTitle("Hector Decks")
      .setDescription(
        `My commands for decks made by Hector are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Hector please use the commands listed above or click on the buttons below!
Note: Hector has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1110694038157402224/hector.jpg"
      )
      .setColor("Random");
    let kshe = new EmbedBuilder()
    .setTitle(`${result[5].kitchenhg}`)
			.setDescription(`${result[3].kitchenhg}`)
			.setFooter({text: `${result[2].kitchenhg}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].kitchenhg}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].kitchenhg}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].kitchenhg}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].kitchenhg}`)
    const m = await message.channel.send({ embeds: [hect], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //Kitchen Sink Has Everything
      if (i.customId == "kshe") {
        await i.update({ embeds: [kshe], components: [ks] });
      }
      if (i.customId == "ks") {
        await i.update({ embeds: [kshe], components: [ks] });
      }
      //help
      if (i.customId == "helph") {
        await i.update({ embeds: [hect], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [hect], components: [row] });
      }
    });
  },
};
