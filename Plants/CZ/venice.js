const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `venice`,
	aliases: [`otktcz`, `czotk`, `otktrickstercz`, `czotktrickster`, `apotatootk`, `apotk`],
	category: `Chompzilla(CZ)`,
		run: async(client, message, args) => {
			const [result]= await db.query(`SELECT apotk from czdecks`)
					const embed = new EmbedBuilder()
	.setTitle(`${result[5].apotk}`)
	.setDescription(`${result[3].apotk}`)
	.setFooter({text: `${result[2].apotk}`})
			.addFields(
				{
				name: "Deck Type",
				value: `${result[6].apotk}`,
				inline: true
				},
				{
				name: "Archetype",
				value: `${result[0].apotk}`,
				inline: true
				},
				{
				name: "Deck Cost", 
				value:`${result[1].apotk}`,
				inline: true
			})
		.setColor("Yellow")		
		.setImage(`${result[4].apotk}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}