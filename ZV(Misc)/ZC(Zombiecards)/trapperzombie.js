const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `trapperzombie`,
	aliases: [`trapper2`, `tz2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
						const row = new ActionRowBuilder()
            .addComponents(
                  new ButtonBuilder()
                    .setCustomId('Trap')
                    .setLabel('Trapper Territory')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:trapperter:1087174711806533672> ')
            );
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/96/TrapperZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144220")
			.setTitle("Trapper Zombie | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pet Mustache Zombie   -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed:** Make a __Trapper Territory__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Purveyor of only the finest banana peel coats.`
								 })
		.setColor("Random")			
	
		const ter = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ec/Trapper%27s_Failed_Activation.png/revision/latest/scale-to-width-down/250?cb=20170404192407")
			.setTitle("Trapper Territory | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Environment  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**Before combat here**: Do 1 damage to each Plant here. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Plants do not like feeling trapped. Can you blame them?`
								 })
		.setColor("Random")			
	
	const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'Trap')  	{
				await i.reply({embeds: [ ter ],flags: MessageFlags.Ephemeral} )
			}
		})
		}
}