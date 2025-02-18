const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `tatertoss`,
	aliases: [`tater1`, `toss`, `tt1`, `spsig`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('hot')
                    .setLabel('Hothead')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:HD_Hot_Head:1107737371048423454>')
            );
		let tt= new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107713726917922897/TaterTossCardImage.webp")
		.setTitle("Tater Toss | <:Kabloom:1062502137826910268><:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: `Make a 1<:Health:1062515540712751184> Hothead that has "__Team-Up__. **When destroyed:** Do 6 damage to a Zombie here."`
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Spudow is one tranquil tuber. Still, sometimes he loses his head."
							 })
		let hh = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cd/HD_Hot_Head_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210219173637")
		.setTitle("Hothead | <:Kabloom:1062502137826910268><:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 6 damage to a Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sure, he has an explosive temper. But for the most part, he's pretty even peeled. "
							 })
								const m = await	message.channel.send({embeds: [tt], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'hot')  {
				await i.reply({embeds: [hh], flags: MessageFlags.Ephemeral})
			}
			})
	}
}