const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `gravebuster`,
	aliases: [`grave`, `buster1`, `gb`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const gb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvs-zombies/images/0/02/Grave_Buster_%28PvZH%29.png/revision/latest?cb=20160521185515&path-prefix=ru")
		.setTitle("Grave Buster | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Gravestone."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"MUST. DESTROY. GRAVES."`
							 })
		message.channel.send({embeds: [gb]})
	}
}