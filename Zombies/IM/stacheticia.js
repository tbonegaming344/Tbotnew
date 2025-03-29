const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `stacheticia`,
	aliases: [`salticia`, `mustacheim`, `mustacheticia`, `godflare`],
	category: `Immorticia(IM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT stacheticia FROM imdecks `)
		let st = new EmbedBuilder()
		.setTitle(`${result[5].stacheticia}`)
		.setDescription(`${result[3].stacheticia}`)
		.setColor("Blue")
		.addFields({
			name: "Deck Type",
			value: `${result[6].stacheticia}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].stacheticia}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].stacheticia}`,
			inline: true
		})
		.setFooter({text: `${result[2].stacheticia}`})
		.setImage(`${result[4].stacheticia}`)
		message.channel.send({embeds: [st]})
	}
}