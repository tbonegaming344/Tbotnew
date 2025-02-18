const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `musclesprout`,
	aliases: [`muscle`, `sprout`, `ms3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ms = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5a/HD_Muscle_Sprout.png/revision/latest?cb=20160813041930")
		.setTitle("Muscle Sprout | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when you play a Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Can you spot me bro?"`
							 })
		message.channel.send({embeds: [ms]})
	}
}