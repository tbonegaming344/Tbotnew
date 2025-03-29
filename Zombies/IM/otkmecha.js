const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `mechascope`,
	aliases: [`otkmecha`, `otkmechasaur`, `mechascope`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT otkmecha FROM imdecks`)
			let mechascope = new EmbedBuilder()
	.setTitle(`${result[5].otkmecha}`)
	.setDescription(`${result[3].otkmecha}`)
	.setFooter({text: `${result[2].otkmecha}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].otkmecha}`,
				inline: true
			},{
				name: "Archetype", 
				value: `${result[0].otkmecha}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].otkmecha}`,
				inline: true
			})
		.setColor("Blue")
		.setImage(`${result[4].otkmecha}`)
	message.channel.send({embeds: [ mechascope ] } ) 
	}
}