const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `sunshroom`,
	aliases: [`ss10`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('ss')
                    .setLabel('Sunnier Shroom')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:SunnierShroom_HD:1107382878540660736>')
            );
		const ss = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107378071859908738/SunShroomPvZH.webp?width=527&height=567")
		.setTitle("Sun-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409> this turn and this transforms into a __Sunnier-Shroom__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Fun in the Sun? That's for other Plants. I just make the stuff. I don't actually enjoy it."`
							 })
		const ss1 = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5b/Sunnier-Shroom_HD.png/revision/latest?cb=20200805002257")
		.setTitle("Sunnier-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +2<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Compared to his little brother, he's the one with the sunnier disposition."
							 })
			const m = await	message.channel.send({embeds: [ss], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'ss')  {
				await i.reply({embeds: [ss1], flags: MessageFlags.Ephemeral})
			}
			})
	}
}