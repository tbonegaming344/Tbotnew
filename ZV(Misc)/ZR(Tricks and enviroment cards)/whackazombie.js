const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `whackazombie`,
	aliases: [`hammer`, `whack`, `waz`, `wz`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let wz = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/34/Whack-a-Zombie_HD.png/revision/latest?cb=20160531183216")
		.setTitle("Whack-a-Zombie | <:Solar:1062502678384607262>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie with 3<:Strength:1062501774612779039> or less. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's hammer time. #hadtobesaid"
							 })
		message.channel.send({embeds: [wz]})
	}
}