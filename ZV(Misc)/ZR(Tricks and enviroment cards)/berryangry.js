const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `berryangry`,
	aliases: [`angry`, `ba`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const ba = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9a/HD_Berry_Angry.png/revision/latest?cb=20160429141501")
		.setTitle("Berry Angry | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants get +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Now you've done it! That's the last straw! I'm gonna berry you!"`
							 })
		message.channel.send({embeds: [ba]})
	}
}