const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetbf`,
	aliases: [`bfbudget`, `bbf`, `bfb`, `budgetbrainfreeze`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetbf FROM bfdecks`)
					let budgetbf= new EmbedBuilder()
	.setTitle(`${result[5].budgetbf}`)
	.setDescription(`${result[3].budgetbf}`)
	.setFooter({text: `${result[2].budgetbf}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].budgetbf}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetbf}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetbf}`,
				inline: true
			})
		.setColor("Blue")
.setImage(`${result[4].budgetbf}`)
	message.channel.send({embeds: [ budgetbf ] } ) 
		}
}