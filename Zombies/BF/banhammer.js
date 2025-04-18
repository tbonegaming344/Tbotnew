const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `banhammer`,
	aliases: [`pepegabf`, `bfpepega`, `graveboy`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT racism FROM bfdecks`)
		const racism = new EmbedBuilder()
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