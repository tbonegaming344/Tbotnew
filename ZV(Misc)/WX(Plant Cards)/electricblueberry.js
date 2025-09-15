const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `electricblueberry`,
	aliases: [`electric`, `blueberry`, `eb1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select electricblueberry from kabloomcards`)
		const eb = new EmbedBuilder()
		.setThumbnail(`${result[4].electricblueberry}`)
		.setTitle(`${result[7].electricblueberry}`)
		.setDescription(`${result[2].electricblueberry}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].electricblueberry}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].electricblueberry}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].electricblueberry}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].electricblueberry}`,
								 inline: true
							 })
		message.channel.send({embeds: [eb]})
	}
}