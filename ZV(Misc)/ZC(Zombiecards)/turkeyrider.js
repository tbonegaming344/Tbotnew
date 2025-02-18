const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `turkeyrider`,
	aliases: [`tr1`, `turkey`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('left')
                    .setLabel('Leftovers')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:leftovers:1087163362133151764>')
            );
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/ba/TurkeyRider.png/revision/latest/scale-to-width-down/250?cb=20180120130844")
			.setTitle("Turkey Rider | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Imp Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When destroyed**: Gain a __Leftovers__. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He insists that, as far as modes of transportation go, turkeys outperform dolphins, walruses, and kangaroos any day.`
								 })
		.setColor("Random")			
	
				let leftovers = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6e/LeftoversCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226113102")
			.setTitle("Leftovers | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Gourmet Pet Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "All Zombies get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombies love them almost as much as brains.`
								 })
		.setColor("Random")			
	
	const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'left')  	{
				await i.reply({embeds: [ leftovers ], flags: MessageFlags.Ephemeral} )
			}
		})
		}
}