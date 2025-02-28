const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetro`,
	aliases: [`robudget`, `budgethmr`, `budgethealmidrose`, `bro`, `budgetrose`, `rosebudget`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetro from rodecks`);
			let bhmr = new EmbedBuilder()
	.setTitle(`${result[5].budgetro}`)
	.setDescription(`${result[3].budgetro}`)
	.setFooter({text:`${result[2].budgetro}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetro}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetro}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetro}`,
				inline: true})
		.setColor("Random")
.setImage(`${result[4].budgetro}`)
		message.channel.send({embeds: [ bhmr] } ) 
	}
}