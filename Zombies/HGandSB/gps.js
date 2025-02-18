const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `gravepiratestache`,
	aliases: [`gps`, `hgaggro`, `aggrohg`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT gps FROM hgdecks`);
		let gravepiratestache= new EmbedBuilder()
		.setTitle(`${result[5].gps}`)
		.setDescription(`${result[3].gps}`)
	.setColor("Random")
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