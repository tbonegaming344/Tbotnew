const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `budgetcomboss`,
	aliases: [`ccbudget`, `bcc`, `budgetcc`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT budgetcc from ccdecks`);
			const embed = new EmbedBuilder()
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
		.setColor("Green")
.setImage(`${result[4].budgetcc}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}