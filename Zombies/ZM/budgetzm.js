const {EmbedBuilder} = require("discord.js");
const db = require('../../index.js')
module.exports = {
	name: `budgetzm`,
	aliases: [`zmbudget`, `bzm`, `zmb`, `budgetzmech`, `budgetmech`, `flaggro`],
	category: `Zmech(ZM)`,
		run: async(client, message, args) => {
			const [result] = await db.query(`SELECT budgetzm FROM zmdecks`);
			const budgetzm = new EmbedBuilder()
	.setTitle(`${result[5].budgetzm}`)
	.setDescription(`${result[3].budgetzm}`)
	.setFooter({text: `${result[2].budgetzm}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].budgetzm}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetzm}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetzm}`,
				inline: true
			})
		.setColor("Purple")
.setImage(`${result[4].budgetzm}`)
	message.channel.send({embeds: [ budgetzm ] } ) 
		}
}