const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js'); 
module.exports = {
	name: `limapleurodon`,
	aliases: [`lima`, `ligma`, `pleurodon`, `lp2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('Magic Beanstalks')
			.setEmoji('<:MagicBeanstalk:1104902066104696872>')
			.setStyle(ButtonStyle.Success)
			);
		const lp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/34/Lima-Pleurodon_cardface.png/revision/latest?cb=20171018094240")
		.setTitle("Lima-Pleurodon | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Abiliy",
								 value: "**__Dino-Roar__:** Shuffle a __Magic Beanstalk__ into your deck. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes one Plant provides both the Army and the Navy."
							 })
			const mgb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1f/MagicBeanstalk.png/revision/latest/scale-to-width-down/250?cb=20180212114409")
		.setTitle("Magic Beanstalk | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Giant not included."
							 })
			const m = await	message.channel.send({embeds: [lp], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i => {
			if(i.customId == 'cmd'){
				await i.reply({embeds: [mgb], flags: MessageFlags.Ephemeral})
			}
		})
	}
}