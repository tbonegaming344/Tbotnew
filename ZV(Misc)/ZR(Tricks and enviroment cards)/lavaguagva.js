const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `lavaguava`,
	aliases: [`lava2`, `guava`, `lg`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bl')
                    .setLabel('Hot Lava')
                    .setStyle(ButtonStyle.Danger)
							.setEmoji('<:hotlava:1091074880251891893>')
							);
		const lg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/57/HD_Lava_Guava.png/revision/latest?cb=20220312093015")
		.setTitle("Lava Guava | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 2 damage to each Zombie here and next door. \n If played on the Ground, make __Hot Lava__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I try to stay cool, I really do. But Zombies! Man, they make me blow my top!"`
							 })
		const hl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8a/Hot_Lava_Environment.png/revision/latest/scale-to-width-down/148?cb=20170625202848")
		.setTitle("Hot Lava | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Before combat here:** Do 1 damage to each Plant and Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Lava has no loyalty. It's just hot. It just IS."
							 })
			const m = await	message.channel.send({embeds: [lg], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'bl')  	{
				await i.reply({embeds: [hl], flags: MessageFlags.Ephemeral} )
			}
		})
	}
}