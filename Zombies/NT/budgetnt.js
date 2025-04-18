const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
	name:`budgetnt`, 
	aliases: [`ntbudget`, `bnt`, `ntb`,`budgetneptuna`, `bneptuna`, `neptunabudget`, `neptunab`,
`budgetntflag`, `budgetflagnt`, `ntbudgetflag`, `flagtuna`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT budgetnt FROM ntdecks`)
		const budgetnt = new EmbedBuilder()
	.setTitle(`${result[5].budgetnt}`)
	.setDescription(`${result[3].budgetnt}`)
	.setFooter({text: `${result[2].budgetnt}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetnt}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetnt}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetnt}`,
				inline: true
			})
		.setColor("#000000")
.setImage(`${result[4].budgetnt}`)
	message.channel.send({embeds: [budgetnt ] } ) 
	}
}