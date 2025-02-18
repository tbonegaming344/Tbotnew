const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pairofpears`,
	aliases: [`pair`, `pop`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		let pop = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/04/PearPalPair.png/revision/latest/scale-to-width-down/250?cb=20180218135748")
		.setTitle("Pair of Pears | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a 2<:Strength:1062501774612779039>/2<:Health:1062515540712751184> Pear Pal with __Team-Up__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's cute how they're always completing each other's sentences."
							 })
		message.channel.send({embeds: [pop]})
	}
}