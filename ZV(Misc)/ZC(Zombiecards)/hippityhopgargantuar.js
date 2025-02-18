const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `hippityhopgarg`,
	aliases: [`hippityhopgargantuar`, `bunnygarg`, `bunny`, `hhg`, `bg2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('Egg')
                    .setLabel('Mystery Egg')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:eggyy:1087162887396663417>')
            );
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6b/Eastergarg.png/revision/latest/scale-to-width-down/250?cb=20170406020547")
			.setTitle("Hippity Hop Gargantuar | <:Crazy:1062502046474973224>")
					.setDescription("**\\- Pet Gargantuar Zombie -**")
			.addFields({name: "Stats", 
									value: "6 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When Played** and **When hurt:** Make a __Mystery Egg__ in a random lane." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Sometimes, what has been seen... can't be unseen. This is one of those times."
								 })
			.setColor("Random")			
	
		let egg = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/63/MysteryHD.png/revision/latest/scale-to-width-down/250?cb=20170406143736")
			.setTitle("Mystery Egg | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Zombie  -**")
			.addFields({name: "Stats", 
									value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability", 
									 value: "**Start of Tricks**: Transform this into a random Zombie that costs 2<:Brainz:1062503146745774183> or less."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `"Mommy, where do little Zombies come from?" Asked and answered.`
								 })
		.setColor("Random")			
	
		const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'Egg') { 	
				await i.reply({embeds: [ egg], flags: MessageFlags.Ephemeral} )
			}
		})
}
}