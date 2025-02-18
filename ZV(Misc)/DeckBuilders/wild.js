const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `wildisnub`,
	aliases: [`wildhelp`, `helpwild`, `wild1`, `decksmadebywild`, `wilddecks`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('terrifytricksterazzi')
                    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tster')
                    .setEmoji("<:arrowright:1271446796207525898>")
                    .setStyle(ButtonStyle.Primary)
							);
		const tster = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpw')
                    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setEmoji("<:arrowright:1271446796207525898>")
                    .setStyle(ButtonStyle.Primary)
							);
		let user = await client.users.fetch("701053825628241951")
		let wild = new EmbedBuilder()
		.setTitle("Wild Decks")
		.setDescription("My commands for decks made by Wild are \n <@1043528908148052089> terrifytricksterazzi")
		.setFooter({text: "To view the Decks Made By Wild please use the commands listed above or click on the buttons below⏬!"})
			.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
		let [result] = await db.query(`select terrifytricksterazzi from rbdecks`);
		let terrifytricksterazzi = new EmbedBuilder()
		.setTitle(`${result[5].terrifytricksterazzi}`)
		.setDescription(`${result[3].terrifytricksterazzi}`)
		.setFooter({ text: `${result[2].terrifytricksterazzi}` })
		.addFields({
		  name: "Deck Type",
		  value: `${result[6].terrifytricksterazzi}`,
		  inline: true,
		},{
		  name: "Archetype",
		  value: `${result[0].terrifytricksterazzi}`,
		  inline: true
		},{ 
		  name: "Deck Cost", 
		  value: `${result[1].terrifytricksterazzi}`,
		  inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].terrifytricksterazzi}`);
		const m = await	message.channel.send({embeds: [wild], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'tster' || i.customId == 'terrifytricksterazzi'){
				await i.update({embeds: [terrifytricksterazzi], components: [tster]})
			}
			if(i.customId == 'helpw'){
				await i.update({embeds: [wild], components: [row] } )
			}
			if(i.customId == 'help'){
				await i.update({embeds: [wild], components: [row] } )
			}
		})
	}
}