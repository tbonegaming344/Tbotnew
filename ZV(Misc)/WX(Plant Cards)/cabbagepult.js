const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `cabbagepult`,
	aliases: [`cabbage`, `cp2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select cabbagepult from megagrowcards`);
		const cp = new EmbedBuilder()
		.setThumbnail(`${result[4].cabbagepult}`)
		.setTitle(`${result[7].cabbagepult}`)
		.setDescription(`${result[2].cabbagepult}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].cabbagepult}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].cabbagepult}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cabbagepult}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cabbagepult}`,
								 inline: true
							 })
		message.channel.send({embeds: [cp]})
	}
}