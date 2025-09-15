const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js");
module.exports = {
	name: `garlic`,
	aliases: [`vimpdestroyer`, `vimptech`, `vimpiredestroyer`, `vimpiretech`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select garlic from guardiancards`)
		const garlic = new EmbedBuilder()
		.setThumbnail(`${result[4].garlic}`)
		.setTitle(`${result[7].garlic}`)
		.setDescription(`${result[2].garlic}`)
		.addFields({name: "Stats", 
							 value: `${result[6].garlic}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].garlic}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].garlic}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].garlic}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].garlic}`,
								 inline: true
							 })
						.setColor("Random")
						
						message.channel.send({embeds: [garlic]})
	}
}