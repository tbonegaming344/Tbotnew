const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `leprechaunimp`,
	aliases: [`leprechaun`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('pog')
			.setLabel('Pot Of Gold')
			.setStyle(ButtonStyle.Success)
			.setEmoji('<:pot:1087161021602476182>')
		);
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2c/Leprechaun_Imp_pvzh.png/revision/latest?cb=20180310220615")
			.setTitle("Leprechaun Imp | <:Brainy:1062500939908530246>")
			.setDescription("**\\-  Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played:** Shuffle a __Pot of Gold__ into your deck. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `When he offers to grant you a wish, do not wish for infinite wishes. It just doesn't work like that.`
								 })
		.setColor("Random")			
	
					const pog = new EmbedBuilder()
					.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/77/PotofGoldCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226110937")
			.setTitle("Pot of Gold | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Party Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Draw three cards." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Token**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The luck of the Zombies!`
								 })
		.setColor("Random")			
	
		const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'pog')  {	
				await i.reply({embeds: [ pog], flags: MessageFlags.Ephemeral} )
			}
		})
		}
}