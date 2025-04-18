const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `gravepiratestache`,
	aliases: [`gps`, `hgaggro`, `aggrohg`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`SELECT gps FROM hgdecks`);
		const gravepiratestache= new EmbedBuilder()
		.setTitle(`${result[5].gps}`)
		.setDescription(`${result[3].gps}`)
		.setColor("#000000")
		.setImage(`${result[4].gps}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].gps}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].gps}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].gps}`,
			inline: true
		})
		.setFooter({text: `${result[2].gps}`})
		message.channel.send({embeds: [gravepiratestache]})
	}
}