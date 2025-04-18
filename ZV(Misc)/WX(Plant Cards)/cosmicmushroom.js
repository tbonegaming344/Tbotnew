const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cosmicmushroom`,
	aliases: [`cm1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e4/Cosmic_Mushroom_HD.png/revision/latest?cb=20170619175749")
		.setTitle("Cosmic Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Mushroom, and it gets +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's far out all right. Like, waaaay far out."
							 })
		message.channel.send({embeds: [cm]})
	}
}