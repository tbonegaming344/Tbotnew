const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `astrovera`,
	aliases: [`astro3`, `vera`, `av1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
	const [result] = await db.query(`select astrovera from solarcards`)
		const av= new EmbedBuilder()
		.setThumbnail(`${result[4].astrovera}`)
		.setTitle(`${result[7].astrovera}`)
		.setDescription(`${result[2].astrovera}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 value: `${result[6].astrovera}`,
							inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].astrovera}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].astrovera}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].astrovera}`,
								 inline: true
							 })
		message.channel.send({embeds: [av]})
	}
}