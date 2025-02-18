const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `trickortreater`,
	aliases: [`tot`, `treater`, `treatingzombie`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
					const row = new ActionRowBuilder()
            .addComponents(
                 new ButtonBuilder()
                    .setCustomId('Sugarytreat')
                    .setLabel('Sugarytreat')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<:sugary:1087158928732860477>'),
							  new ButtonBuilder()
							 .setCustomId('Heartytreat')
                    .setLabel('Healthytreat')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:hearty:1087158979936919643>')
            );
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2b/Trick_or_Treater.png/revision/latest/scale-to-width-down/250?cb=20171130094628")
			.setTitle("Trick-or-Treater | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Gourmet Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "When you play your first Trick each turn, __Conjure__ a __Healthy Treat__ or __Sugary Treat.__"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Trick or treat? He is haunted by that question - and by an answer that continues to elude him.`
								 })
	
			let sugary = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/SugaryTreatCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226102512")
			.setTitle("Sugary Treat | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +3<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Tooth decay: Not exactly a big concern for Zombies.`
								 })
		.setColor("Random")			
	
				let hearty = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8e/Healthhh.png/revision/latest/scale-to-width-down/250?cb=20170107053505")
			.setTitle("Healthy Treat | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Gourmet Trick -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +1<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Great for Zombie Health. Like a vitamin only sweeter.`
								 })
		.setColor("Random")			
	
			const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i  => {
			if (i.customId == 'Heartytreat')  	{
				await i.reply({embeds: [ hearty ], flags: MessageFlags.Ephemeral} )
			}
				if (i.customId == 'Sugarytreat') { 	
				await i.reply({embeds: [ sugary ], flags: MessageFlags.Ephemeral } )
				}
		})
		}
}