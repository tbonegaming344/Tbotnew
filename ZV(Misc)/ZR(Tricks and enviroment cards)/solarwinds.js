const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `solarwinds`,
	aliases: [`solar`, `winds`, `sw1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
				const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sun')
                    .setLabel('Sunflower')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:sunflowers:1107425771263361174>')
            );
		const sw = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b5/ZenGardenCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144402")
		.setTitle("Solar Winds | <:Solar:1062502678384607262>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**End of Turn:** If there are no Zombies here, make a __Sunflower__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "There's something in the wind. Sunflower seeds, in fact."
							 })
		const sun = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/b/b3/HD_Sunflower.png/revision/latest?cb=20201121031511&path-prefix=protagonist")
		.setTitle("Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Not to brag, but I'm pretty much your basic franchise-founding superstar."`
							 })
							const m = await	message.channel.send({embeds: [sw], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'sun')  {
				await i.reply({embeds: [sun], flags: MessageFlags.Ephemeral})
			}
			})
	}
}