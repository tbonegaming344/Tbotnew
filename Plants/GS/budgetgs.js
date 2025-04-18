const {EmbedBuilder} = require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `budgetmopshadow`,
	aliases: [`budgetgs`,`gsbudget`, `budgetgreenshadow`, `greenshadowbudget`, `budgetmopgs`, `gsbudgetmop`, `bgsmop`, `mopshadow`],
	category: `Green Shadow(GS)`, 
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT budgetgs from gsdecks`);
				const budgetgs = new EmbedBuilder()
	.setTitle(`${result[5].budgetgs}`)
	.setDescription(`${result[3].budgetgs}`)
	.setFooter({text:`${result[2].budgetgs}`})
			.addFields({
			name: "Deck Type",
			value: `${result[6].budgetgs}`,
			inline: true
			},
			{
			name: "Archetype",
			value: `${result[0].budgetgs}`,
			inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].budgetgs}`,
				inline: true
			})
		.setColor("White")
.setImage(`${result[4].budgetgs}`)
	message.channel.send({embeds: [ budgetgs ] } )
}
}