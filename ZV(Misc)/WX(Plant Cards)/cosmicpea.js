const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js")
module.exports = {
	name: `cosmicpea`,
	aliases: [`cp3`, `cpea`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select cosmicpea from megagrowcards`)
		const cp = new EmbedBuilder()
			.setThumbnail(`${result[4].cosmicpea}`)
		.setTitle(`${result[7].cosmicpea}`)
		.setDescription(`${result[2].cosmicpea}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].cosmicpea}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].cosmicpea}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].cosmicpea}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cosmicpea}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cosmicpea}`,
								 inline: true
							 })
		message.channel.send({embeds: [cp]})
	}
}