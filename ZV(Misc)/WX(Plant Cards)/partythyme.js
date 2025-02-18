const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `partythyme`, 
	aliases: [`party`, `thyme`, `pt1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pt = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/df/PartyThyme.png/revision/latest/scale-to-width-down/250?cb=20190310190101")
		.setTitle("Party Thyme | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant does a Bonus Attack, draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A real extrovert, this one."
							 })
		message.channel.send({embeds: [pt]})
	}
}