const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetplantmop`,
	aliases: [`ccbudget`, `bcc`, `bpm`, `buggerplantmop`, `budgetcc`, `buggermop`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetcc from ccdecks`);
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].budgetcc}`)
	.setDescription(`${result[3].budgetcc}`)
	.setFooter({text: `${result[2].budgetcc}`})
			.addFields({
				name: "Deck Type",
				value:`${result[6].budgetcc}`,
				inline: true
			},
			{
				name: "Archetype",
				value:`${result[0].budgetcc}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetcc}`,
				inline: true})
		.setColor("Random")
.setImage(`${result[4].budgetcc}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}