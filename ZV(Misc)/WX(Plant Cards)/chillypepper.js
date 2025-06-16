const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `chillypepper`,
	aliases: [`chilly`, `cp4`, `cpepper`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select chillypepper from smartycards`);
		const cp = new EmbedBuilder()
		.setThumbnail(`${result[4].chillypepper}`)
		.setTitle(`${result[7].chillypepper}`)
		.setDescription(`${result[2].chillypepper}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: 	`${result[6].chillypepper}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].chillypepper}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].chillypepper}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].chillypepper}`,
								 inline: true
							 })
		message.channel.send({embeds: [cp]})
		}
}