const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `planetofthegrapes`,
	aliases: [`potg`, `planet`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let potg = new EmbedBuilder()
		.setThumbnail("https://images-ext-2.discordapp.net/external/mwvcig1p9OF10m6xMeCced8W3CReA5w5CuMVY_EF4YQ/%3Fcb%3D20170627005948/https/static.wikia.nocookie.net/plantsvszombies/images/4/4c/Planet_of_the_Grapes_HD.png/revision/latest/scale-to-width-down/250")
		.setTitle("Planet of the Grapes | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Berry Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant here hurts the Zombie Hero, draw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "How this planet came to be? It's another of life's grape mysteries."
							 })
		message.channel.send({embeds: [potg]})
	}
}