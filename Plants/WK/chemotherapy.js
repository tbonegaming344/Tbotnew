const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: 'chemotherapy',
	aliases: [`chemo`, `wkchemo`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT chemotherapy from wkdecks`);
		let chemotherapy = new EmbedBuilder()
		.setTitle(`${result[5].chemotherapy}`)
		.setDescription(`${result[3].chemotherapy}`)
		.setFooter({text: `${result[2].chemotherapy}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].chemotherapy}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].chemotherapy}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].chemotherapy}`,
			inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].chemotherapy}`)
		message.channel.send({embeds: [chemotherapy]})
	}
}