const {EmbedBuilder} = require("discord.js");
const db = require('../../index.js')
module.exports = {
	name: `otkswabbie`,
	aliases: [`swabbieotk`, `otkswabbiebf`, `otks`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) =>	{
		const [result] = await db.query(`SELECT otkswabbie FROM sbdecks`)
			const embed = new EmbedBuilder()
	.setTitle(`${result[5].otkswabbie}`)
	.setDescription(`${result[3].otkswabbie}`)
	.setFooter({text: `${result[2].otkswabbie}`})
				.addFields({
					name: "Deck Type", 
					value: `${result[6].otkswabbie}`,
					inline: true
				},{
					name: "Archetype",
					value: `${result[0].otkswabbie}`,
					inline: true
				},{
					name: "Deck Cost", 
					value:`${result[1].otkswabbie}`,
					inline: true
				})
		.setColor("#000000")
.setImage(`${result[4].otkswabbie}`)
	message.channel.send({embeds: [ embed ] } )
	}
}