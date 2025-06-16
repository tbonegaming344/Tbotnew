const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `aloesaurus`,
	aliases: [`aloe`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result]= await db.query(`select aloesaurus from solarcards`);
		const aloe = new EmbedBuilder()
		.setThumbnail(`${result[4].aloesaurus}`)
		.setTitle(`${result[7].aloesaurus}`)
		.setDescription(`${result[2].aloesaurus}`)
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: `${result[6].aloesaurus}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].aloesaurus}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].aloesaurus}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].aloesaurus}`,
								 inline: true
							 })
		message.channel.send({embeds: [aloe]})
	}
}