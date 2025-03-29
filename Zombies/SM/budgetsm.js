const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetsm`,
	aliases: [`smbudget`, `budgetsmash`, `smashbudget`, `budgetsmswarm`, `smswarmbudget`, `smbudgetsmswarm`, `budgetts`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetsm FROM smdecks`)
				let budgetsm = new EmbedBuilder()
	.setTitle(`${result[5].budgetsm}`)	
			.setDescription(`${result[3].budgetsm}`)
	.setFooter({text: `${result[2].budgetsm}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetsm}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetsm}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetsm}`,
				inline: true
			})	
			.setImage(`${result[4].budgetsm}`)
		.setColor("Blue")			
		message.channel.send({embeds: [ budgetsm] } ) 
		}
}