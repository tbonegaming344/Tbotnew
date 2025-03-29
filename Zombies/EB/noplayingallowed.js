const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `noplayingallowed`,
	aliases: [`ebnoplayingallowed`, `npa`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT noplayingallowed FROM ebdecks`)
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].noplayingallowed}`)
	.setDescription(`${result[3].noplayingallowed}`)
	.setFooter({text: `${result[2].noplayingallowed}`})
				.addFields({
					name: "Deck Type",
					value: `${result[6].noplayingallowed}`,
					inline: true
				},{
					name: "Archetype",
					value: `${result[0].noplayingallowed}`,
					inline: true
				},{
					name: "Deck Cost", 
					value: `${result[1].noplayingallowed}`,
					inline: true
				})
		.setColor("Purple")
		.setImage(`${result[4].noplayingallowed}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}