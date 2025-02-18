const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `fertilize`,
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let fert = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1104417231401664672/FertilizerCardImage.webp")
		.setTitle("Fertilize | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +3<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set - Rarity",
								value: "Basic - Common"
							 },
							 {
								 name: "Flavor Text",
								 value: "Stinky, sure, but powerful stuff. Ask any Plant."
							 })
		message.channel.send({embeds: [fert]})
	}
}