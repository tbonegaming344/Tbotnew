const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `bustbolt`,
	aliases: [`boltbust`, `bustingbolts`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select bustbolt from rbdecks`)
		let bust = new EmbedBuilder()
		.setTitle(`${result[5].bustbolt}`)
		.setDescription(`${result[3].bustbolt}`)
		.setColor("Random")
			.setFooter({text: `${result[2].bustbolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].bustbolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].bustbolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].bustbolt}`,
			inline: true
		})
		.setImage(`${result[4].bustbolt}`)
		message.channel.send({embeds: [bust]})
	}
}