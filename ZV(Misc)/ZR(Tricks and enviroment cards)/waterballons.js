const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `waterballoons`,
	aliases: [`water`, `balloons`, `balloon`, `wb3`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let wb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9e/HD_Water_Balloons.png/revision/latest?cb=20160606171525")
		.setTitle("Water Balloons | <:Solar:1062502678384607262>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A non-Amphibious Zombie gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \n If you made at least 6<:Sun:1062501177679413409> this turn, it gets -3<:Strength:1062501774612779039>/-3<:Health:1062515540712751184> instead."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "You're gonna need a towel for this one."
							 })
		message.channel.send({embeds: [wb]})
	}
}