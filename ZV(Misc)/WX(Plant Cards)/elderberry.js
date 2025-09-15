const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `elderberry`,
	aliases: [`elder`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select elderberry from solarcards`)
		const eld = new EmbedBuilder()
		.setThumbnail(`${result[4].elderberry}`)
		.setTitle(`${result[7].elderberry}`)
		.setDescription(`${result[2].elderberry}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].elderberry}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[0].elderberry}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value:`${result[1].elderberry}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].elderberry}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].elderberry}`,
								inline: true
							 })
		message.channel.send({embeds: [eld]})
	}
}