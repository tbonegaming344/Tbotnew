const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `tacticalcuke`,
	aliases: [`tactical`, `cuke`, `tc1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=>{
		const tc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/Tactical_Cuke_HD.png/revision/latest?cb=20170227010025")
		.setTitle("Tactical Cuke | <:Solar:1062502678384607262>")
		.setDescription("**\\- Fruit Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy all Plants and Zombies on the Ground. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He comes from a long line of very precise cucumbers."
							 })
		message.channel.send({embeds: [tc]})
	}
}