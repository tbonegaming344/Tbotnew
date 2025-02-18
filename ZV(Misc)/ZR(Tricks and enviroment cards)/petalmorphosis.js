const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `petalmorphosis`,
	aliases: [`petal`, `morph`, `morphosis`, `petalmorph`, `hailmary`, `pm3`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let pm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dc/PetalMorphosisCardImage.png/revision/latest?cb=20180208062943")
		.setTitle("Petal-Morphosis | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Flower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Transform a Plant into a random Plant. \n Draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "For when it's time to turn over a new leaf."
							 })
		message.channel.send({embeds: [pm]})
	}
}