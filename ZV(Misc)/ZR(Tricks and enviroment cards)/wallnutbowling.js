const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `wallnutbowling`,
	aliases: [`wnb`, `bowling`, `walnutbowling`,`bowl`, `wallnut-bowling`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('nut')
                    .setLabel('Wallnut')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:HD_Wallnut:1089674209443205192>')
            );
		const wnb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b9/Wall-Nut_Bowling_HD.png/revision/latest?cb=20160610205319")
		.setTitle("Wall-Nut Bowling | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "9 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Make a __Wall-Nut__ in each Ground lane. \n Attack for 6 damage in those lanes. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Ugly shoes not required!"
							 })
		const nut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/HD_Wall-nut.png/revision/latest?cb=20220414061652")
		.setTitle("Wall-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Works well with others. Says so, right there on his resume."
							 })
						const m = await	message.channel.send({embeds: [ wnb], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'nut')  {
				await i.reply({embeds: [nut], flags: MessageFlags.Ephemeral})
			}
			})
	}
}