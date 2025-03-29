const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `antiagoragor`,
	aliases: [`imptuna`],
	category: `Neptuna(NT)`,
	run: async(client, message,args)=> {
		let [result] = await db.query(`SELECT antiagoragor FROM ntdecks`)
		let a = new EmbedBuilder()
		.setImage(`${result[4].antiagoragor}`)
		.setTitle(`${result[5].antiagoragor}`)
		.setDescription(`${result[3].antiagoragor}`)
			.setColor("#000000")
		.addFields({
			name: "Deck Type",
			value: `${result[6].antiagoragor}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].antiagoragor}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].antiagoragor}`,
			inline: true
		})
		.setFooter({text: `${result[2].antiagoragor}`})
		message.channel.send({embeds: [a]})
	}
}