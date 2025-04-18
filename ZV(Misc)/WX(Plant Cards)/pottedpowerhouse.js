const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pottedpowerhouse`,
	aliases: [`potted`, `powerhosue`, `pp7`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const pp = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1113173306963677234/potted.webp")
		.setTitle("Potted Powerhouse | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in your hand:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when a Plant gains Strength or Health."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She loves living out of a pot. It's not for every Plant. But to her, it's home."
							 })
		message.channel.send({embeds: [pp]})
	}
}