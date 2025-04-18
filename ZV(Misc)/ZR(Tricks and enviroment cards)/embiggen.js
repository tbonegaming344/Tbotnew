const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `embiggen`,
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const em = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107667591092248676/EmbiggenCardImage.webp")
		.setTitle("Embiggen | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plants gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Livin' large, oh yeah."
							 })
		message.channel.send({embeds: [em]})
	}
}