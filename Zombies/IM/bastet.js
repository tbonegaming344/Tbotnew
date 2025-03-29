const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name:  `bastet`,
	aliases: [`catster`, `trickcatche`],
	category: `Immorticia(IM)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT bastet FROM imdecks`)
				let bastet = new EmbedBuilder()
			.setTitle(`${result[5].bastet}`)
			.setDescription(`${result[3].bastet}`)
			.setFooter({text: `${result[2].bastet}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].bastet}`,
				inline: true
			},{
				name: "Archetype", 
				value: `${result[0].bastet}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].bastet}`,
				inline: true
			})
		.setColor("Blue")
.setImage(`${result[4].bastet}`)
	message.channel.send({embeds: [ bastet ] } ) 
		}
}