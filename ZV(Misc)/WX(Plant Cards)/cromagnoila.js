const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `cromagnolia`,
	aliases: [`cromag`,`cm2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select cromagnolia from kabloomcards`)
		const cm = new EmbedBuilder()
		.setThumbnail(`${result[4].cromagnolia}`)
		.setTitle(`${result[7].cromagnolia}`)
		.setDescription(`${result[2].cromagnolia}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].cromagnolia}`, 
							inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].cromagnolia}`
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cromagnolia}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cromagnolia}`, 
								 inline: true
							 })
		message.channel.send({embeds: [cm]})
	}
}