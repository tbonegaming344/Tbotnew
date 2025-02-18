const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pluckyclover`,
	aliases: [`plucky`, `clover`, `pc2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ad/UnpluckyC.png/revision/latest?cb=20180216045827")
		.setTitle("Plucky Clover | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ an Event card. Plucky Clover gets +<:Strength:1062501774612779039> equal to that card's cost."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's a giver, no doubt. But she feels like she gets a lot out of it too."
							 })
		message.channel.send({embeds: [pc]})
	}
}