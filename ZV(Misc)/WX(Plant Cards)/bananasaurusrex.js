const {EmbedBuilder} = require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `bananasaurusrex`,
	aliases: [`brex`, `bananasaurus`, `rex`, `br1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select bananasaurusrex from megagrowcards`);
		const brex = new EmbedBuilder()
		.setThumbnail(`${result[4].bananasaurusrex}`)
		.setTitle(`${result[7].bananasaurusrex}`)
		.setDescription(`${result[2].bananasaurusrex}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 value: `${result[6].bananasaurusrex}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].bananasaurusrex}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].bananasaurusrex}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].bananasaurusrex}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].bananasaurusrex}`,
								 inline: true
							 })
		message.channel.send({embeds: [brex]})
	}
}