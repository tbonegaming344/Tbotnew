const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js')
module.exports = {
	name: `brady`,
	aliases: [`smashmouth`, `mariogalaxy`, `3star`, `ballin`],
	category: `Zmech(ZM)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT brady FROM zmdecks`);
			let brady = new EmbedBuilder()
	.setTitle(`${result[5].brady}`)
	.setDescription(`${result[3].brady}`)
	.setFooter({text: `${result[2].brady}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].brady}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].brady}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].brady}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].brady}`)
	message.channel.send({embeds: [ brady ] } ) 
		}
}