const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `midred`,
	aliases: ['redmid', `midr`],
	category: `Chompzilla(CZ)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT midred from czdecks`)
				let embed = new EmbedBuilder()
	.setTitle(`${result[5].midred}`)
	.setDescription(`${result[3].midred}`)
	.setFooter({text: `${result[2].midred}`})
			.addFields({
			name: "Deck Type",
			value: `${result[6].midred}`,
			inline: true
			},
			{
			name: "Archetype",
			value: `${result[0].midred}`,
			inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].midred}`,
				inline: true
			})
		.setColor("Yellow")
		.setImage(`${result[4].midred}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}