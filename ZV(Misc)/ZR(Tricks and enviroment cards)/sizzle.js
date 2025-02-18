const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `sizzle`,
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let sizz = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/eb/HD_Sizzle.PNG/revision/latest?cb=20160702001107")
		.setTitle("Sizzle | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 5 damage to a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Incredibly hot and full of electricity. So much ouch."
							 })
		message.channel.send({embeds: [sizz]})
	}
}