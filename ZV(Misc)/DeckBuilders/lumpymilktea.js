const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js")
  module.exports = {
    name: `lumpymilktea`,
    aliases: [
      `decksmadebylumpy`,
      `helplumpy`,
      `lumpyhelp`,
      `lumpydecks`,
      `lumpydecks`,
      `lumpy`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("translattail")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("tl")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const tl = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helplumpy")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["translattail"];
       let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
      const user = await client.users.fetch("733617302401974322");
        const [result] = await db.query(`select translattail from ncdecks`)
        const lumpy = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("#99838b");
        const translattail = new EmbedBuilder()
	.setTitle(`${result[5].translattail}`)
	.setDescription(`${result[3].translattail}`)
	.setFooter({text: `${result[2].translattail}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].translattail}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].translattail}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value:`${result[1].translattail}`,
				inline: true
			})
		.setColor("#99838b")		
		.setImage(`${result[4].translattail}`)
        const m = await message.channel.send({ embeds: [lumpy], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
            if (i.customId == "tl" || i.customId == "translattail") {
                await i.update({ embeds: [translattail], components: [tl] });
            }
            else if (i.customId == "helplumpy" || i.customId == "help") {
                await i.update({ embeds: [lumpy], components: [row] });
            }
        }); 
    }
}