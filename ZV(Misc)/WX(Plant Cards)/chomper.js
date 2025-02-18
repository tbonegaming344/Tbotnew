const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `chomper`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let cho = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/c/c5/HD_Chomper.png/revision/latest?cb=20201123212500&path-prefix=protagonist")
		.setTitle("Chomper | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Destroy a Zombie here with 3<:Strength:1062501774612779039> or less. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"A free buffet? How kind! Don't mind if I do!"`
							 })
		message.channel.send({embeds: [cho]})
	}
}