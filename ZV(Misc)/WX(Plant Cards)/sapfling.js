const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports= {
	name: `sapfling`,
	aliases: [`sap`, `fling`, `sf2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sap')
                    .setLabel('Sappy Place')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:Sappy_Place:1106931786136694904>')
            );
		let sf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7e/SapFlingCardImage.png/revision/latest?cb=20180217032517")
		.setTitle("Sap-Fling | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Pinecone Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a __Sappy Place__ Environment."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He dates a lot of different branches, but nothing ever sticks."
							 })
		const sap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7d/Sappy_Place_card_face.png/revision/latest?cb=20180216052701")
		.setTitle("Sappy Place | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Zombies here get -3 <:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies just hate a sappy ending."
							 })
				const m = await	message.channel.send({embeds: [sf], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'sap')  {
				await i.reply({embeds: [sap], flags: MessageFlags.Ephemeral})
			}
			})
	}
}