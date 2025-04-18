const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `budgetmopzilla`,
	aliases: [`czbudget`, `bcz`, `budgetcz`, `budgetzilla`, `budgetmopcz`, `czbudgetmop`, `bmz`, `budgetchompzilla`, `chompzillabudget`, `mopzilla`],
	category: `Chompzilla(CZ)`,
		run: async(client, message, args) => {
			const [result]= await db.query(`SELECT budgetcz from czdecks`)
					const embed = new EmbedBuilder()
	.setTitle(`${result[5].budgetcz}`)
	.setDescription(`${result[3].budgetcz}`)
	.setFooter({text: `${result[2].budgetcz}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetcz}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].budgetcz}`,
				inline: true
			},{
				name : "Deck Cost", 
				value: `${result[1].budgetcz}`,
				inline: true})
		.setColor("Yellow")
.setImage(`${result[4].budgetcz}`)
	message.channel.send({embeds: [ embed ] } )
		}
}