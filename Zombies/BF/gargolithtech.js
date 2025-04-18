const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
	name: `gargolithtech`,
	aliases: [`techedgargolith`,`gt`, `gtech`, `gartolithtech`, `techgargolith`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT gargolithtech FROM bfdecks`)
			const embed = new EmbedBuilder()
	.setTitle(`${result[5].gargolithtech}`)	
			.setDescription(`${result[3].gargolithtech}`)
	.setFooter({text: `${result[2].gargolithtech}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].gargolithtech}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].gargolithtech}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].gargolithtech}`,
				inline: true
			})
		.setColor("Blue")					
		.setImage(`${result[4].gargolithtech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}