const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `plantfood`,
	aliases: [`food`, `pf1`, `pfood`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const pf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fc/Pvz2plantfood.png/revision/latest?cb=20130821151547")
		.setTitle("Plant Food | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and does a Bonus Attack."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The most important meal of the day."
							 })
		message.channel.send({embeds: [pf]})
	}
}