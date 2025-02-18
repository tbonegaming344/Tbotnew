const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `trickstache`,
	aliases: [`mustachetricks`, `pbtrickstache`, `trs`, `trickstash`],
	category: `Professor Brainstorm(PB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT trickstache FROM pbdecks`)
				let embed = new EmbedBuilder()
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
		.setColor("Random")
		.setImage(`${result[4].trickstache}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}