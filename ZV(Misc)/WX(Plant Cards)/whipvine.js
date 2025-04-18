const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `whipvine`,
	aliases: [`whip`, `vine`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const whip = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e7/HD_Whipvine.PNG/revision/latest?cb=20161002092657")
		.setTitle("Whipvine | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Get along, little Zombie."`
							 })
		message.channel.send({embeds: [whip]})
	}
}