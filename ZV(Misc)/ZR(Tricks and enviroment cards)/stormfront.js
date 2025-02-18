const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `stromfront`, 
	aliases: [`storm`, `front`, `sf1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let sf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1c/StormFrontCardImage.png/revision/latest/scale-to-width-down/250?cb=20180208073759")
		.setTitle("Storm Front | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Bad for your picnic. Good for your Plants."
							 })
		message.channel.send({embeds: [sf]})
	}
}