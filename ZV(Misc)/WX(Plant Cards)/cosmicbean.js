const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js")
module.exports = {
	name: `cosmicbean`,
	aliases: [`cb2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select cosmicbean from smartycards`)
		const cb = new EmbedBuilder()
		.setThumbnail(`${result[4].cosmicbean}`)
		.setTitle(`${result[7].cosmicbean}`)
		.setDescription(`${result[2].cosmicbean}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].cosmicbean}`,
								inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].cosmicbean}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].cosmicbean}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cosmicbean}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cosmicbean}`,
								 inline: true
							 })
		message.channel.send({embeds: [cb]})
	}
}