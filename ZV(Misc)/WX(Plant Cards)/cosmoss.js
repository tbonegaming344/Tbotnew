const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js")
module.exports = {
	name: `cosmoss`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select cosmoss from solarcards`)
		const cos = new EmbedBuilder()
		.setThumbnail(`${result[4].cosmoss}`)
		.setTitle(`${result[7].cosmoss}`)
		.setDescription(`${result[2].cosmoss}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].cosmoss}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].cosmoss}`,
								inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cosmoss}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cosmoss}`,
								 inline: true
							 })
		message.channel.send({embeds: [cos]})
	}
}