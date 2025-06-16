const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `chomper`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select chomper from solarcards`);
		const cho = new EmbedBuilder()
		.setThumbnail(`${result[4].chomper}`)
		.setTitle(`${result[7].chomper}`)
		.setDescription(`${result[2].chomper}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].chomper}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].chomper}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].chomper}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].chomper}`,
								 inline: true
							 })
		message.channel.send({embeds: [cho]})
	}
}