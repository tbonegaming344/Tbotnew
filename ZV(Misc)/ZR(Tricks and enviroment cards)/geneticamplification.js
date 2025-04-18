const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `geneticamplification`,
	aliases: [`genetic1`, `amplification`, `ga`, `bcsig`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const ga = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/Genetic_Amplification_card.png/revision/latest/scale-to-width-down/250?cb=20170414224507")
		.setTitle("Genetic Amplification | <:Guardian:1062501130501885973><:Smarty:1062502890448638022>")
		.setDescription("**\\- Root Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Conjure__ a Plant that costs 2<:Sun:1062501177679413409>. It gets +2<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>, __Amphibious__, and __Team-Up__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The modifications are controversial, sure. But the results are hard to argue with."
							 })
		message.channel.send({embeds: [ga]})
	}
}