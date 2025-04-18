const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `fireweed`,
	aliases: [`fire2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bl')
                    .setLabel('Hot Lava')
                    .setStyle(ButtonStyle.Danger)
							.setEmoji('<:hotlava:1091074880251891893>')
							);
		const fire= new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/de/Blushing_bush.png/revision/latest/scale-to-width-down/250?cb=20170816030419")
		.setTitle("Fireweed | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Flower Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played on the Ground:** Make __Hot Lava__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't touch the floor. The floor is lava."
							 })
		const hl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8a/Hot_Lava_Environment.png/revision/latest/scale-to-width-down/148?cb=20170625202848")
		.setTitle("Hot Lava | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
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
			const m = await	message.channel.send({embeds: [ fire], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'bl')  	{
				await i.reply({embeds: [hl], flags: MessageFlags.Ephemeral} )
			}
		})
	}
}