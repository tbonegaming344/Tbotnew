const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js') 
module.exports = {
	name: `splimps`,
	aliases: [`ifsplimps`, `spi`, `slims`, `splims`],
	category: `Impfinity(IF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT splimps FROM ifdecks`)
	let embed = new EmbedBuilder()
	.setTitle(`${result[5].splimps}`)
	.setDescription(`${result[3].splimps}`)
	.setFooter({text: `${result[2].splimps}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].splimps}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].splimps}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].splimps}`,
				inline: true
			})
		.setColor("#000000")
		.setImage(`${result[4].splimps}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
		}