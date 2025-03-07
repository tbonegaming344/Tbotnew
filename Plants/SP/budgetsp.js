const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetburstsp`,
	aliases: [`spbudget`, `bsp`, `budgetsp`,`budgetsd`],
	category: `Spudow(SP)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetburstsp from spdecks`);
				let budgetsp = new EmbedBuilder()
	.setTitle(`${result[5].budgetburstsp}`)
	.setDescription(`${result[3].budgetburstsp}`)
	.setFooter({text: `${result[2].budgetburstsp}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetburstsp}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetburstsp}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetburstsp}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].budgetburstsp}`)
	message.channel.send({embeds: [ budgetsp] } ) 
		}
}