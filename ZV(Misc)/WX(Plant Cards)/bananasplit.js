const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `bananasplit`,
	aliases: [`bsplit`, `bs3`, `split2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const half = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId("hb")
			.setStyle(ButtonStyle.Primary)
			.setLabel("Half Banana")
			.setEmoji("<:Half_Banana:1105118939631059055>")
		)
		
		const bs = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/16/Banana_Split_HD.png/revision/latest?cb=20170225005900")
		.setTitle("Banana Split | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** Make two __Half-Bananas__ next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I don't want to brag, hanging out in a tub full of ice cream all day... not a bad gig if you can get it."`
							 })
		const hb = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/30/Half-Banana_card_face.png/revision/latest?cb=20171015065628")
		.setTitle("Half-Banana | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** All Bananas in your hand get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Have you met my better half? She's around here somewhere."`
							 })
			const m = await	message.channel.send({embeds: [bs], components: [half] } )
			const collector = m.createMessageComponentCollector()
		collector.on("collect", async i => {
			if(i.customId == 'hb'){
				await i.reply({embeds: [hb], flags: MessageFlags.Ephemeral})
			}
		})
	}
}