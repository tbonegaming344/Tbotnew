const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bananapeel`,
	aliases: [`peel`, `bpeel`, `bp1`, `banpeel`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		const bp = new EmbedBuilder()
		.setTitle("Banana Peel | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Fruit Trick -**")
		.setColor("Random")
		.addFields({name: "Stats", 
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Move a Zombie. \n __Conjure__ a Fruit."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "A slapstick comedy staple that, somehow, the Zombies never see coming."
							 })
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fe/BananaPeelCardImage.png/revision/latest/scale-to-width-down/250?cb=20170923033450")
		
		message.channel.send({embeds: [bp]})
	}
}