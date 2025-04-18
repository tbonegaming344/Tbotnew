const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `threenut`,
	aliases: [`3nut`, `3`, `three`, `tn`, `3n`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const tn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e8/Three-Nut_cardface.png/revision/latest?cb=20170701063428")
		.setTitle("Three-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Pea Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant, that Plant's <:Strength:1062501774612779039> becomes 3<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They say two heads are better than one. Three-Nut just took the next evolutionary step."
							 })
		message.channel.send({embeds: [tn]})
	}
}