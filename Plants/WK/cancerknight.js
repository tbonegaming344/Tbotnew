const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `cancerknight`,
	aliases: [`cancer`, `cancerwk`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT cancerknight from wkdecks`);
		const cancer = new EmbedBuilder()
		.setTitle(`${result[5].cancerknight}`)
		.setDescription(`${result[3].cancerknight}`)
		.setColor("Yellow")
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