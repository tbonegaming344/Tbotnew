const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `blazingbark`,
	aliases: [`blazing`, `bark`, `bb1`, `ccsig`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const bb= new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f6/BlazingBarkCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227183409")
		.setTitle("Blazing Bark | <:Kabloom:1062502137826910268><:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Tree Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +4<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
									name: "Flavor Text",
								 value: "Captain Combustible knows how to light a fire under his teammates."
							 })
		message.channel.send({embeds: [bb]})
	}
}