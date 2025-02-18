const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js'); 
module.exports = {
	name: `moonbean`,
	aliases: [`moon`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('Magic Beanstalks')
			.setEmoji('<:MagicBeanstalk:1104902066104696872>')
			.setStyle(ButtonStyle.Success)
			);
		let mb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/95/Moon_Bean_HD.png/revision/latest?cb=20170225005923")
		.setTitle("Moonbean | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this does damage, shuffle two __Magic Beanstalks__ into your deck. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She and Sunflower are besties. It's just too bad their schedules make it hard for them to get together."
							 })
		let mgb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1f/MagicBeanstalk.png/revision/latest/scale-to-width-down/250?cb=20180212114409")
		.setTitle("Magic Beanstalk | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Giant not included."
							 })
			const m = await	message.channel.send({embeds: [mb], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i => {
			if(i.customId == 'cmd'){
				await i.reply({embeds: [mgb],  flags: MessageFlags.Ephemeral})
			}
		})
	}
}