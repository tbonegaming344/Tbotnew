const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `briarrose`,
	aliases: [`briar`, `br2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select briarrose from solarcards`);
		const br = new EmbedBuilder()
		.setThumbnail(`${result[4].briarrose}`)
		.setTitle(`${result[7].briarrose}`)
		.setDescription(`${result[2].briarrose}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value:`${result[6].briarrose}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].briarrose}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].briarrose}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].briarrose}`,
								 inline: true
							 })
		message.channel.send({embeds: [br]})
	}
}