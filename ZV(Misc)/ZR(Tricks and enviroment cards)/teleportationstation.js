const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `teleportationstation`,
	aliases: [`tpstation`, `tps`, `ts1`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('teleport')
			.setLabel('Teleport')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('<:teleport:1087160283534991472>')
		)
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5a/TransformationLabCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144156")
			.setTitle("Teleportation Station | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Superpower Environment   -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**Start of Turn:** If there's a Zombie here, gain a __Teleport__." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Teleportation is a relatively new technology. Has a few kinks that need ironing out. So yeah, sometimes things get a little...mixed up.`
								 })
		.setColor("Random")			
	
				let teleport = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/Teleport_HD.png/revision/latest?cb=20181016041010")
			.setTitle("Teleport | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "You may play a Zombie when it's time for Tricks this turn. \n Draw a card." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Feels like cheating.`
								 })
		.setColor("Random")			
	
		const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'teleport') {
				await i.reply({embeds: [ teleport], flags: MessageFlags.Ephemeral} )
			}
		})
	}
}