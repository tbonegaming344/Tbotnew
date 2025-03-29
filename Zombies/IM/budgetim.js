const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetim`,
	aliases: [`imbudget`, `budgetimmortica`, `bim`, `imb`, `budgetscience`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetim FROM imdecks`)
				let embed = new EmbedBuilder()
	.setTitle(`${result[5].budgetim}`)	
			.setDescription(`${result[3].budgetim}`)
	.setFooter({text:`${result[2].budgetim}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetim}`,
				inline: true
			},{
				name: "Archetype", 
				value: `${result[0].budgetim}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].budgetim}`,
				inline: true
			})	
			.setImage(`${result[4].budgetim}`)
		.setColor("Blue")			
	message.channel.send({embeds: [ embed ] } ) 
		}
}