const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `highlander`,
	aliases: [`wkhighlander`, `highlanderwk`, `13-0`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT highlander from wkdecks`);
		let hl = new EmbedBuilder()
		.setTitle(`${result[5].highlander}`)
		.setDescription(`${result[3].highlander}`)
		.setColor("Random")
		.setFooter({text: `${result[2].highlander}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].highlander}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].highlander}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].highlander}`,
			inline: true
		})
		.setImage(`${result[4].highlander}`)
		message.channel.send({embeds: [hl]})
	}
}