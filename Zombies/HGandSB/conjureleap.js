const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `conjureleap`,
	aliases: [`conjureleaphg`, `cleap`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT conjureleap FROM hgdecks`)
			let embed = new EmbedBuilder()
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
		.setColor("Random")			
		.setImage(`${result[4].conjureleap}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}