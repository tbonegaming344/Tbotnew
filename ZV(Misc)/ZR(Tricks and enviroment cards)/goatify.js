const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `goatify`,
	aliases: [`rosig`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('goat')
                    .setLabel('Goat')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:goatremovebgpreview:1107737288332550204>')
            );
		let ro = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107735927482228817/GoatifyCardSprite.webp")
		.setTitle("Goatify | <:Smarty:1062502890448638022><:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Transform a Zombie with the highest Strength into a __Goat__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Rose turns Zombies into goats because... GOATS!"
							 })
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a0/GoatCardImage.png/revision/latest?cb=20180923071125")
			.setTitle("Goat | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Brainz:1062503146745774183>"},
								 {
								name: "Ability", 
								value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when any kind of Goat is hurt."	 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Triassic - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Hungry... Smelly... A lot like a Zombie but with 100% more goat.`
								 })
		.setColor("Random")			
	
								const m = await	message.channel.send({embeds: [ro], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'goat')  {
				await i.reply({embeds: [embed], flags: MessageFlags.Ephemeral})
			}
			})
	}
}