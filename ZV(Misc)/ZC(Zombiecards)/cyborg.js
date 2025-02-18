const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `cyborgzombie`,
	aliases: [`cyborg`,`smallborg`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
					const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('venge')
                    .setLabel('Vengeful Cyborg')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:cyborg:1087161586487152753>')
            );
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cb/HD_Cyborg_Zombie_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210304225649")
			.setTitle("Cyborg Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
								 },
								 {
									 name: "Trait", 
									 value: "__Hunt__"
								 },
								 {
									 name: "Ability",  
									 value: "**When destroyed**: Gain a __Vengeful Cyborg__"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text",
									 value: `He'll be back.`
								 })
		.setColor("Random")			
	
			let venge = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a8/HD_Vengeful_Cyborg_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210304225754")
			.setTitle("Vengeful Cyborg | <:Beastly:1062500894744264714>")
					.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Hunt__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "His toupee went missing in the heat of battle and he's been furious about it ever since"
								 })
			.setColor("Random")			
	
			const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'venge')  {	
				await i.reply({embeds: [ venge], flags: MessageFlags.Ephemeral } )
			}
		})
	}
}