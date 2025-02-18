const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `vegetationmutation`,
	aliases: [`veggie`, `vegetation`, `mutation`, `vm`, `vegmut`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let vm = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1104070650936709221/InspireCardImage.webp")
		.setTitle("Vegetation Mutation | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants on Heights and Environments get +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Environmentalism at its finest."
							 })
		message.channel.send({embeds: [vm]})
	}
}