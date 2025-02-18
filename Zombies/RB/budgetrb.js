const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetrb`,
	aliases: [`rbbudget`, `budgetrustbolt`, `rustboltbudget`, `budgetswarmrb`, `swarmbudgetrb`, `rbbudgetswarm`, `budgetbolt`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select budgetrb from rbdecks`)
				let budgetrb= new EmbedBuilder()
	.setTitle(`${result[5].budgetrb}`)	
			.setDescription(`${result[3].budgetrb}`)
	.setFooter({text: `${result[2].budgetrb}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetrb}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetrb}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetrb}`,
				inline: true
			})	
			.setImage(`${result[4].budgetrb}`)
		.setColor("Random")			
	message.channel.send({embeds: [ budgetrb ] } ) 
		}
}