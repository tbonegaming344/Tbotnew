const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `berryblast`,
	aliases: [`blast`, `bb3`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const bb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f0/BerryBlastCardImage.png/revision/latest?cb=20180207012728")
		.setTitle("Berry Blast | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 3 damage."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Vicious AND nutritious."
							 })
		message.channel.send({embeds: [bb]})
	}
}