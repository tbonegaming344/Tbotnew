const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `espressofiesta`,
	aliases: [`espressoespresso`, `fiesta`, `ef1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let ef = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8d/EspressoFiestaCardImage.png/revision/latest?cb=20180216042710")
		.setTitle("Espresso Fiesta | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Bean Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "8 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant does three Bonus Attacks."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't consume after 5 p.m. You'll be up all night."
							 })
		message.channel.send({embeds: [ef]})
	}
}