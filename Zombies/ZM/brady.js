const {EmbedBuilder} = require("discord.js");
const db = require('../../index.js')
module.exports = {
	name: `brady`,
	aliases: [`smashmouth`, `mariogalaxy`, `3star`, `ballin`, `bradyinrome`],
	category: `Zmech(ZM)`,
		run: async(client, message, args) => {
			const [result] = await db.query(`SELECT brady FROM zmdecks`);
			const brady = new EmbedBuilder()
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
		.setColor("Purple")
.setImage(`${result[4].brady}`)
	message.channel.send({embeds: [ brady ] } ) 
		}
}