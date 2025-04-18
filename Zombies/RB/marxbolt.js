const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js")
module.exports = {
	name: `marxbolt`,
	aliases: [`coffeeswarm`, `swarmcoffee`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select marxbolt from rbdecks`)
		const marxbolt = new EmbedBuilder()
		.setTitle(`${result[5].marxbolt}`)
		.setDescription(`${result[3].marxbolt}`)
		.setFooter({text: `${result[2].marxbolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].marxbolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].marxbolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].marxbolt}`,
			inline: true
		})
		.setColor("Orange")
		.setImage(`${result[4].marxbolt}`)
		message.channel.send({embeds: [marxbolt]})
	}
}