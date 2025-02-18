const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `hauntingzombie`,
	aliases: [`haunting`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('ghost')
			.setLabel('Haunting Ghost')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('<:boo:1087162445627400292>')
		);
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/15/HauntingZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226203920")
			.setTitle("Haunting Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When destroyed**: Gain a __Haunting Ghost__" 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `He doesn't realize he would look even scarier without the spooky ghost costume.`
								 })
		.setColor("Random")			
	
		let ghost = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/04/HD_Haunting_Ghost_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20221022222105")
			.setTitle("Haunting Ghost | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played**: A Plant gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `HIs he a Zombie? Is he a ghost? He refuses to be pigeonholed.`
								 })
		.setColor("Random")			
	
		const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'ghost') {
				await i.reply({embeds: [ghost],flags: MessageFlags.Ephemeral } )
			}
		})
		}
}