const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `dandylionking`,
	aliases: [`dandy`, `lion`, `dandylion`, `lionking`, `dlk`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let dlk = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/19/DandyLionKingCardImage.png/revision/latest?cb=20180208071438")
		.setTitle("Dandy Lion King | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Flower Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Damage the Zombie Hero for __half__ their Health. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's developed a taste for Zombie Heroes."
							 },
							 {
								 name: "Half",
								 value: "Round down the damage."
							 })
		message.channel.send({embeds: [dlk]})
	}
}