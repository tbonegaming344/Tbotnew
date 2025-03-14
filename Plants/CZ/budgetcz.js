const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetmopzilla`,
	aliases: [`czbudget`, `bcz`, `budgetcz`, `budgetzilla`, `budgetmopcz`, `czbudgetmop`, `bmz`, `budgetchompzilla`, `chompzillabudget`, `mopzilla`],
	category: `Chompzilla(CZ)`,
		run: async(client, message, args) => {
			let [result]= await db.query(`SELECT budgetcz from czdecks`)
					let embed = new EmbedBuilder()
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
		.setColor("Random")
.setImage(`${result[4].budgetcz}`)
	message.channel.send({embeds: [ embed ] } )
		}
}