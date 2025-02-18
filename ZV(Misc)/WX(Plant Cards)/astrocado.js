const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags} = require('discord.js');
module.exports = {
	name: `astrocado`,
	aliases: [`cado`, `astro2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cado')
                    .setLabel('Astrocado Pit')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<:AstrocadoPitCardImage:1107464101103411280>')
            );
		let cado = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/22/AstrocadoCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135303")
		.setTitle("Astrocado | <:Solar:1062502678384607262>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strikethrough:1062502987425140806>, 3 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Gain an __Astrocado Pit__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Holy guacamole!"`
							 })
		const pit = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c7/AstrocadoPitCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135314")
		.setTitle("Astrocado Pit | <:Solar:1062502678384607262>")
		.setDescription("**\\- Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This transforms into an Astrocado. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Getting defeated is the pits."
							 })
								const m = await	message.channel.send({embeds: [cado], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'cado')  {
				await i.reply({embeds: [pit], flags: MessageFlags.Ephemeral})
			}
			})
	}
}