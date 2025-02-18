const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetnc`,
	aliases: [`ncbudget`, `budgetswarmnc`, `bnc`, `hypernavy`],
	category: `Night Cap(NC)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetnc from ncdecks`); 
					let budgetnc = new EmbedBuilder()
	.setTitle(`${result[5].budgetnc}`)
	.setDescription(`${result[3].budgetnc}`)
	.setFooter({text: `${result[2].budgetnc}`})
			.addFields(
				{
				name: "Deck Type",
				value: `${result[6].budgetnc}`,
				inline: true
				},
				{
				name: "Archetype",
				value: `${result[0].budgetnc}`,
				inline: true
				},
			{
				name: "Deck Cost", 
				value: `${result[1].budgetnc}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].budgetnc}`)
	message.channel.send({embeds: [ budgetnc ] } )
		}
}