const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `sweap`,
	aliases: [`sweaphg`, `swe`],
	category: `Huge-Gigantacus/SuperBrainz`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT sweap FROM hgdecks`)
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].sweap}`)	
			.setDescription(`${result[3].sweap}`)
	.setFooter({text: `${result[2].sweap}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].sweap}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].sweap}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].sweap}`,
				inline: true
			})
		.setColor("Random")			
		.setImage(`${result[4].sweap}`)
	message.channel.send({embeds: [ embed ] } ) 
}
}