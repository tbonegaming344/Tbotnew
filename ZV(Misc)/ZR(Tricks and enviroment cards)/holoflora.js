const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `holoflora`,
	aliases: [`holo`, `flora`, `hf`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let hf = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107668936234901575/HoloFloraCardImage.webp")
		.setTitle("Holo-Flora | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Draw two cards."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "You got Plants."
							 })
		message.channel.send({embeds: [hf]})
	}
}