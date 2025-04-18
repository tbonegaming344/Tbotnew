const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `strawberrian`,
	aliases: [`strawb`, `berrian`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bb')
                    .setLabel('Berry Blast')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:BerryBlastCardImage:1092164792082505849>')
            );
		const str = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7a/StrawberrianHD.png/revision/latest/scale-to-width-down/250?cb=20180131202731")
		.setTitle("Strawberrian | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Berry, do 1 damage to Zombies next door to Strawberrian. \n **__Berry Evolution__:** Gain a __Berry Blast__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When it's time to fight, he gets pretty juiced."
							 })
		const bb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f0/BerryBlastCardImage.png/revision/latest?cb=20180207012728")
		.setTitle("Berry Blast | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 3 damage."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Vicious AND nutritious."
							 })
			const m = await	message.channel.send({embeds: [ str], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter, time: 60000})
		collector.on('collect', async i  => {
			if (i.customId == 'bb')  	
				message.channel.send({embeds: [bb ] } )
		})
	}
}