const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
name: `budgetpb`,
	aliases: [`pbbudget`, `budgetbrainstorm`, `bpb`, `pbb`, `yemburst`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select budgetpb from pbdecks`)
				let budgetpb = new EmbedBuilder()
	.setTitle(`${result[5].budgetpb}`)	
			.setDescription(`${result[3].budgetpb}`)
	.setFooter({text: `${result[2].budgetpb}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetpb}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetpb}`,
				inline: true
			},{
				name: "Deck Cost",
				value: `${result[1].budgetpb}`,
				inline: true
			})	
					.setImage(`${result[4].budgetpb}`)
		.setColor("Random")			
	message.channel.send({embeds: [ budgetpb ] } ) 
		}
}