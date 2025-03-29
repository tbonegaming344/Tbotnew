const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `racism`,
	aliases: [`pepegabf`, `bfpepega`, `racismbf`, `bfracism`, `graveboy`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT racism FROM bfdecks`)
		let racism = new EmbedBuilder()
		.setTitle(`${result[5].racism}`)
		.setDescription(`${result[3].racism}`)
		.setColor("Blue")
		.addFields({
			name: "Deck Type", 
			value: `${result[6].racism}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].racism}`,
			inline: true
		},{
			name: "Deck Cost", 
			value:`${result[1].racism}`,
			inline: true
		})
		.setFooter({text: `${result[2].racism}`})
.setImage(`${result[4].racism}`)
		message.channel.send({embeds: [racism]})
	}
}