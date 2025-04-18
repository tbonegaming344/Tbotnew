const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `timetoshine`,
	aliases: [`tts`, `shine`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const tts = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/21/TimetoShineCardImage.png/revision/latest?cb=20180216050612")
		.setTitle("Time To Shine | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant does a Bonus Attack."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Make you feel all warm, glowy, and like kickin' Zombie butt."
							 })
		message.channel.send({embeds: [tts]})
	}
}