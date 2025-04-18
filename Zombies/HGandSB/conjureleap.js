const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `conjureleap`,
	aliases: [`conjureleaphg`, `cleap`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT conjureleap FROM hgdecks`)
			const embed = new EmbedBuilder()
	.setTitle(`${result[5].conjureleap}`)	
			.setDescription(`${result[3].conjureleap}`)
	.setFooter({text: `${result[2].conjureleap}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].conjureleap}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].conjureleap}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].conjureleap}`,
				inline: true
			})
		.setColor("#000000")			
		.setImage(`${result[4].conjureleap}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}