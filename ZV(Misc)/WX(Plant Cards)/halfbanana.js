const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `halfbanana`,
	aliases: [`half`, `hb2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const hb = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/30/Half-Banana_card_face.png/revision/latest?cb=20171015065628")
		.setTitle("Half-Banana | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** All Fruits in your hand get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Have you met my better half? She's around here somewhere."`
							 })
		message.channel.send({embeds: [hb]})
	}
}