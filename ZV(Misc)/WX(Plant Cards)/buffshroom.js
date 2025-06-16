const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `buffshroom`,
	aliases: [`buff`, `bs2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select buffshroom from kabloomcards`);
		const bs = new EmbedBuilder()
		.setThumbnail(`${result[4].buffshroom}`)
		.setTitle(`${result[7].buffshroom}`)
		.setDescription(`${result[2].buffshroom}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].buffshroom}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].buffshroom}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].buffshroom}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].buffshroom}`,
								 inline: true
							 })
		message.channel.send({embeds: [bs]})
	}
}