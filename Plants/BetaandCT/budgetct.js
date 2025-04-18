const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `budgetct`,
	aliases: [`ctbudget`, `bct`, `budgettempoct`,`ctbudgettempo`, `citronbudget`, `budgetelusives`, `budgetcitron`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
		const [result] = await db.query("SELECT budgetct FROM ctdecks")
			const budgetct = new EmbedBuilder()
	.setTitle(`${result[5].budgetct}`)
	.setDescription(`${result[3].budgetct}`)
	.setFooter({text: `${result[2].budgetct}`})
			.addFields(
				{
					name: "Deck Type", 
					value: `${result[6].budgetct}`,
					inline: true
				},
				{
					name: "Archetype",
					value: `${result[0].budgetct}`,
					inline: true
				},
				{	name: "Deck Cost", 
					value: `${result[1].budgetct}`,
					inline: true
				})
		.setColor("White")
	.setImage(`${result[4].budgetct}`)
	message.channel.send({embeds: [ budgetct] } ) 
	}
}