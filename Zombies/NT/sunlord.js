const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `sunlord`,
	aliases: [`warlordimps`, `wimp`, `slord`, `wimps`, `quirkimps`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`select wimps from ntdecks`)
			const embed = new EmbedBuilder()
	.setTitle(`${result[5].wimps}`)	
			.setDescription(`${result[3].wimps}`)
	.setFooter({text: `${result[2].wimps}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].wimps}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].wimps}`,
				inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].wimps}`,
				inline: true
			})
		.setColor("#000000")					
		.setImage(`${result[4].wimps}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}