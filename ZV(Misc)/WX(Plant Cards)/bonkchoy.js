const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bonkchoy`, 
	aliases: [`bonk`, `choy`, `bc2`, `bchoy`],
	category: `Plant Cards`, 
	run: async(client, message, args)=> {
		let bc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plants-vs-zombies-heroes-through-time/images/2/27/HD_Bonk_Choy_%28PvZH%29.png/revision/latest/thumbnail/width/360/height/360?cb=20170330140458")
		.setTitle("Bonk Choy | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1<:Strength:1062501774612779039> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Little known fact: He used to have two teeth."
							 })
		
		message.channel.send({embeds: [bc]})
	}
}