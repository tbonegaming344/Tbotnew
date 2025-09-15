const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `doubledmint`,
	aliases: [`dobuled`, `mint`, `dm1`, `doublemint`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select doubledmint from megagrowcards`)
		const dm = new EmbedBuilder()
		.setThumbnail(`${result[4].doubledmint}`)
		.setTitle(`${result[7].doubledmint}`)
		.setDescription(`${result[2].doubledmint}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].doubledmint}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].doubledmint}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].doubledmint}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].doubledmint}`, 
								 inline: true
							 })
		message.channel.send({embeds: [dm]})
	}
}