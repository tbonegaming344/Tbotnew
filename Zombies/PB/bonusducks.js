const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `bonusducks`,
	aliases: [`bducks`, `combostorm`, `mimester`, `bd`],
		category: `Professor Brainstorm(PB)`, 
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT bonusducks FROM pbdecks`)
	let bd = new EmbedBuilder()
		.setTitle(`${result[5].bonusducks}`)
		.setDescription(`${result[3].bonusducks}`)
		.setColor("Random")
		.setFooter({text: `${result[2].bonusducks}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].bonusducks}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].bonusducks}`,
			inline: true
		},{
			name: "Deck Cost", 
			value:`${result[1].bonusducks}`,
			inline: true
		})
		.setImage(`${result[4].bonusducks}`)
		message.channel.send({embeds: [bd]})
	}
}