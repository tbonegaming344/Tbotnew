const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `atomicbombegranate`,
	aliases: [`atomic`, `bombegranate`, `bomb2`, `ab`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('seed')
                    .setLabel('Seedling')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<:seed:1094704185074794578>')
            );
		let ab = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/75/AtomicBombegrenate.png/revision/latest/scale-to-width-down/250?cb=20180217024029")
		.setTitle("Atomic Bombegranate | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "5 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** Make __Seedlings__ here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Remember: Never ever EVER split a fruit. Oh, hold on, actually fruits are OK, just never split an atom."
							 })
		let seed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/5/58/HD_Seedling.png/revision/latest?cb=20170421135619")
		.setTitle("Seedling | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This transforms into a random Plant that costs 6<:Sun:1062501177679413409> or less."
							 },
							 {
								 name:"Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's the tiny seed of a... nobody actually knows."
							 })
			const m = await	message.channel.send({embeds: [ab], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'seed')  	{
				await i.reply({embeds: [seed], flags: MessageFlags.Ephemeral} )
			}
		})
	}
}