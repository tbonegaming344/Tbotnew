const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `cancerknight`,
	aliases: [`cancer`, `cancerwk`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT cancerknight from wkdecks`);
		let cancer = new EmbedBuilder()
		.setTitle(`${result[5].cancerknight}`)
		.setDescription(`${result[3].cancerknight}`)
		.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].cancerknight}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].cancerknight}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].cancerknight}`,
			inline: true
		})
		.setImage(`${result[4].cancerknight}`)
		.setFooter({text: `${result[2].cancerknight}`})
		message.channel.send({embeds: [cancer]})
	}
}