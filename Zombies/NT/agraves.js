const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `agraves`,
	aliases: [`ntagraves`, `agravesnt`, `ag`, `aggrograves`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT agraves FROM ntdecks`)
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].agraves}`)
	.setDescription(`${result[3].agraves}`)
	.setFooter({text: `${result[2].agraves}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].agraves}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].agraves}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].agraves}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].agraves}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}