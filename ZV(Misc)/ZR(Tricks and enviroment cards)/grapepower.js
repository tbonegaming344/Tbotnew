const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `grapepower`,
	aliases: [`gp2`, `grape2`, `power`],
	category: `Tricks Phase`,
	run: async(client, message,args)=> {
				const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('gr')
                    .setLabel('Grape Responsibility')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:Grape_Responsibility:1104781603428896849>')
            );
		let gp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/Grape_Power_cardface.png/revision/latest?cb=20170701134111")
		.setTitle("Grape Power | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Berry Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Double a Plant's <:Strength:1062501774612779039>. \n Gain a __Grape Responsibility__."
							 },
							 {
								 name: "Flavor Text",
								 value: "**Colossal - Super-Rare**"
							 })
		const gr = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4d/Grape_Responsibility_cardface.png/revision/latest?cb=20171014120033")
		.setTitle("Grape Responsibility | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Berry Trick -**")
		.addFields({name: "Stats",
							 value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Double a Plant's <:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When you think of responsibility, think of grapes."
							 })
			.setColor("Random")
			
		const m = await	message.channel.send({embeds: [gp], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'gr')  {
				await i.reply({embeds: [gr], flags: MessageFlags.Ephemeral})
			}
			})
	}
}