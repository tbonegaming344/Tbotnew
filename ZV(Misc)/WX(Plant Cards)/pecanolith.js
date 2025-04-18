const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pecanolith`,
	aliases: [`pecan`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const pecan = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/b/b3/Pecanolith_HD.png/revision/latest?cb=20180212042554")
		.setTitle("Pecanolith | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 7 <:healthstrength:1062502584256045147>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants and Zombies attack using their <:Health:1062515540712751184> instead of their  <:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "No one knows where he came from. He just appeared one day. But everyone who comes in contact with him feels... changed somehow."
							 })
		message.channel.send({embeds: [pecan]})
	}
}