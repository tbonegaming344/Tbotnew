const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lilyofthevalley`,
	aliases: [`lily1`, `valley`, `lotv`, `lv`, `lilyof`, `lilyofthe`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let lotv = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/77/IMG_2736.png/revision/latest/scale-to-width-down/250?cb=20180404031433")
		.setTitle("Lily of the Valley | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant on Heights, that Plant gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's always trying to elevate her friends. She's good like that."
							 })
		message.channel.send({embeds: [lotv]})
	}
}