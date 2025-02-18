const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `gravemistake`,
	aliases: [`graveflick`, `mistake`, `gflick`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let gf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/35/Grave_Mistake_cardface.png/revision/latest?cb=20170701135045")
		.setTitle("Grave Mistake | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Bounce__ a Gravestone. \nDraw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Warning: Don't flick gravestones in real life."
							 })
		message.channel.send({embeds: [gf]})
	}
}