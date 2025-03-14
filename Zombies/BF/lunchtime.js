const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `lunchtime`,
	aliases: [`petsmid`, `mid-pets`, `pets-mid`, `midpets`],
		category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT midpets FROM bfdecks`)
		let mp = new EmbedBuilder()
		.setTitle(`${result[5].midpets}`)
		.setDescription(`${result[3].midpets}`)
		.setColor("Random")
		.setImage(`${result[4].midpets}`)
		.setFooter({text: `${result[2].midpets}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].midpets}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].midpets}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].midpets}`,
			inline: true
		})
		message.channel.send({embeds: [mp]})
	}
}