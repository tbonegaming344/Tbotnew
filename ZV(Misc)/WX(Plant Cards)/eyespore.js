const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `eyespore`,
	aliases: [`eye`],
	category: `Plant Cards`,
	run: async(client,message, args)=> {
		const [result] = await db.query(`select eyespore from solarcards`)
		const eye = new EmbedBuilder()
		.setThumbnail(`${result[4].eyespore}`)
		.setTitle(`${result[7].eyespore}`)
		.setDescription(`${result[2].eyespore}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].eyespore}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].eyespore}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].eyespore}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].eyespore}`,
								 inline: true
							 })
		message.channel.send({embeds: [eye]})
	}
}