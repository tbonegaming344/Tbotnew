const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `fumeshroom`,
	aliases: [`fume`, `fs`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select fumeshroom from solarcards`)
		const fs = new EmbedBuilder()
		.setThumbnail(`${result[4].fumeshroom}`)
		.setTitle(`${result[7].fumeshroom}`)
		.setDescription(`${result[2].fumeshroom}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].fumeshroom}`,
							inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].fumeshroom}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].fumeshroom}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].fumeshroom}`,
								 inline: true
							 })
		message.channel.send({embeds: [fs]})
	}
}