const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `healcontrol`,
	aliases: [`otktcz`, `czotk`, `otktrickstercz`, `czotktrickster`, `apotatootk`, `apotk`],
	category: `Chompzilla(CZ)`,
		run: async(client, message, args) => {
			let [result]= await db.query(`SELECT apotk from czdecks`)
					let embed = new EmbedBuilder()
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
		.setColor("Random")		
		.setImage(`${result[4].apotk}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}