const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `applesaucer`,
	aliases: [`apple`, `saucer`, `as2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select applesaucer from solarcards`)
		const as = new EmbedBuilder()
		.setThumbnail(`${result[4].applesaucer}`)
		.setTitle(`${result[7].applesaucer}`)
		.setDescription(`${result[2].applesaucer}`)
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: `${result[6].applesaucer}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].applesaucer}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].applesaucer}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].applesaucer}`,
								 inline: true
							 })
		message.channel.send({embeds: [as]})
	}
}