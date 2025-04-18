const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `iceberglettuce`,
	aliases: [`iceberg`, `lettuce`, `il`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const il = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a2/HD_Iceberg_Lettuce%EF%BC%88PvZH%EF%BC%89.png/revision/latest?cb=20160429142558")
		.setTitle("Iceberg Lettuce | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "<:freeze:1323059404874055774>__Freeze__ a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"FREEZE! Ha, just kidding. Little Iceberg humor there."`
							 })
		message.channel.send({embeds: [il]})
	}
}