const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `onionrings`,
	aliases: [`onion`, `ring`, `or`, `orings`, `rings`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let or = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/88/OnionRingsCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226142700")
		.setTitle("Onion Rings | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Each Plant in your hand becomes 4<:Strength:1062501774612779039>/4<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "So powerful it makes you cry."
							 })
		message.channel.send({embeds: [or]})
	}
}