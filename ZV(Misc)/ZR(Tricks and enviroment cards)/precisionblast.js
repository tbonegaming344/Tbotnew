const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `precisionblast`,
	aliases: [`precision`, `gssig`, `pb1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const pb = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107705569256689675/PrecisionBlastCardIcon.webp")
		.setTitle("Precision Blast | <:MegaGrow:1062501412992458802><:Smarty:1062502890448638022>")
		.setDescription("**\\- Pea Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Attack for 5 damage in the middle lane."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Green Shadow's approach is right down the middle."
							 })
		message.channel.send({embeds: [pb]})
	}
}