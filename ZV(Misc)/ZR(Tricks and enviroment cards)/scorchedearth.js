const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `scoredearth`,
	aliases: [`scorch`, `scorched`, `se`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const se = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b3/ScorchedEarthCardIcon.png/revision/latest/scale-to-width-down/250?cb=20170225102630")
		.setTitle("Scorched Earth | <:Solar:1062502678384607262>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Unfortunately the Zombies were all out of SPF 9000."
							 })
		message.channel.send({embeds: [se]})
	}
}