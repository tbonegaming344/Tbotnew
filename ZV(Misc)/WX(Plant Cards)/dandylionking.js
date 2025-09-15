const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js")
module.exports = {
	name: `dandylionking`,
	aliases: [`dandy`, `lion`, `dandylion`, `lionking`, `dlk`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select dandylionking from kabloomcards`)
		const dlk = new EmbedBuilder()
		.setThumbnail(`${result[4].dandylionking}`)
		.setTitle(`${result[7].dandylionking}`)
		.setDescription(`${result[2].dandylionking}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].dandylionking}`, 
							inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].dandylionking}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].dandylionking}`, 
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].dandylionking}`,
								 inline: true
							 },
							 {
								 name: "Half",
								 value: `${result[1].dandylionking}`,
								 inline: true
							 })
		message.channel.send({embeds: [dlk]})
	}
}