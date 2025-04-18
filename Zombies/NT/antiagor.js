const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
	name: `antiagor`,
	aliases: [`ntexhaust`, `cowboyexhaust`, `colloseumcowboy`, `coloboy`, `agor`, `antiantiantiagor`],
	category: `Neptuna(NT)`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`SELECT antiagor FROM ntdecks`)
		const coloboy = new EmbedBuilder()
		.setTitle(`${result[5].antiagor}`)
		.setDescription(`${result[3].antiagor}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].antiagor}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].antiagor}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].antiagor}`,
			inline: true
		})
		.setFooter({text: `${result[2].antiagor}`})
		.setColor("#000000")
		.setImage(`${result[4].antiagor}`)
		message.channel.send({embeds: [coloboy]})
	}
}