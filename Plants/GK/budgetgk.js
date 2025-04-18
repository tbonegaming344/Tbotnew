const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
	name: `budgettempogk`,
	aliases: [`gkbudget`, `bgk`, `budgetgk`, `mopfather`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args) => {
		const [result]= await db.query(`SELECT budgetgk from gkdecks`)
				const budgetgk = new EmbedBuilder()
	.setTitle(`${result[5].budgetgk}`)
	.setDescription(`${result[3].budgetgk}`)
	.setFooter({text: `${result[2].budgetgk}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetgk}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetgk}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetgk}`,
				inline: true
			})
		.setColor("#964B00")
.setImage(`${result[4].budgetgk}`)
	message.channel.send({embeds: [ budgetgk ] } )
	}
}