const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js")
module.exports = {
	name: `darkmatterdragonfruit`,
	aliases: [`dmd`, `darkmattter`, `dragonfruit`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select darkmatterdragonfruit from kabloomcards`)
		const dmd = new EmbedBuilder()
		.setThumbnail(`${result[4].darkmatterdragonfruit}`)
		.setTitle(`${result[7].darkmatterdragonfruit}`)
		.setDescription(`${result[2].darkmatterdragonfruit}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].darkmatterdragonfruit}`, 
							 inline: true},
							 {
								 name: "Traits",
								 value: `${result[8].darkmatterdragonfruit}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].darkmatterdragonfruit}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].darkmatterdragonfruit}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].darkmatterdragonfruit}`,
								 inline: true
							 })
		message.channel.send({embeds: [dmd]})
	}
}