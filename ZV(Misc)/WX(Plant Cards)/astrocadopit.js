const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `astrocadopit`,
	aliases: [`pit`, `ap`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select astrocadopit from solarcards`)
		const ap = new EmbedBuilder()
		.setThumbnail(`${result[4].astrocadopit}`)
		.setTitle(`${result[7].astrocadopit}`)
		.setDescription(`${result[2].astrocadopit}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].astrocadopit}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].astrocadopit}`, 
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].astrocadopit}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].astrocadopit}`,
								 inline: true
							 })
		message.channel.send({embeds: [ap]})
	}
}