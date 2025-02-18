const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lawnmower`,
	aliases: [`lawn`, `mower`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let lawn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/Lawn_Mower_HD.png/revision/latest?cb=20160602163233")
		.setTitle("Lawnmower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie on the Ground. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The thing of Zombie nightmares"
							 })
		message.channel.send({embeds: [lawn]})
	}
}