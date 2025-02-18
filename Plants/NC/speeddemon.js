const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `speeddemon`,
	aliases: [`speed`, `sdemon`],
	category: `Night Cap(NC)`,
	run: async(client, message, args) =>	{
		let [result] = await db.query(`SELECT speeddemon from ncdecks`);
	let embed = new EmbedBuilder()
	.setTitle(`${result[5].speeddemon}`)
	.setDescription(`${result[3].speeddemon}`)
	.setFooter({text:`${result[2].speeddemon}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].speeddemon}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].speeddemon}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].speeddemon}`,
				inline: true
			})
		.setColor("Random")		
	.setImage(`${result[4].speeddemon}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}