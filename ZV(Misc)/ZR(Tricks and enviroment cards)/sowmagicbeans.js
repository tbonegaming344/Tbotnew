const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js'); 
module.exports = {
	name: `sowmagicbeans`,
	aliases: [`sow`, `smb`, `magicbeans`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('Magic Beanstalks')
			.setEmoji('<:MagicBeanstalk:1104902066104696872>')
			.setStyle(ButtonStyle.Success)
			);
		let swb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4a/SowMagicBeansCardImage.png/revision/latest/scale-to-width-down/250?cb=20180217015402")
		.setTitle("Sow Magic Beans | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Bean Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Shuffle five __Magic Beanstalks__ into your deck. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Totally worth the cow."
							 })
		let mgb = new EmbedBuilder()
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
			const m = await	message.channel.send({embeds: [swb], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i => {
			if(i.customId == 'cmd'){
				await i.reply({embeds: [mgb],  flags: MessageFlags.Ephemeral})
			}
		})
	}
}