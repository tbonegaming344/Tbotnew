const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `captaincucumber`,
	aliases: [`cucc`, `ccuc`, `cucumber`, `cc1`, `captaincucc`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cucc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2a/CaptainCucumberCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135731")
		.setTitle("Captain Cucumber | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Cards you __Conjure__ cost 1<:Sun:1062501177679413409> less. \n When this does damage, __Conjure__ a Legendary card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's steered his crew through many a pickle."
							 })
		message.channel.send({embeds: [cucc]})
	}
}