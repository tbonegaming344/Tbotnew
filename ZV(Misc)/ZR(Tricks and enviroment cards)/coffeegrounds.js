const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `coffeegrounds`,
	aliases: [`coffee1`, `cg1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const cg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6c/CoffeeGroundsCardImage.png/revision/latest/scale-to-width-down/250?cb=20170923033112")
		.setTitle("Coffee Grounds | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Bean Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here get <:DoubleStrike:1062501703494160394>__Double Strike__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Nothing wakes you up in the morning like extra attacks on Zombies. Well OK, coffee does."
							 })
		message.channel.send({embeds: [cg]})
	}
}