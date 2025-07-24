const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `quartsterstache`,
	aliases: [`mustachetricks`, `pbtrickstache`, `trs`, `trickstash`, `trickstache`, `qss`],
	category: `Professor Brainstorm(PB)`,
		run: async(client, message, args) => {
			const [result] = await db.query(`SELECT trickstache FROM pbdecks`)
				const embed = new EmbedBuilder()
	.setTitle(`${result[5].trickstache}`)
	.setDescription(`${result[3].trickstache}`)
	.setFooter({text: `${result[2].trickstache}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].trickstache}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].trickstache}`,
				inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].trickstache}`,
				inline: true
			})
		.setColor("Purple")
		.setImage(`${result[4].trickstache}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}