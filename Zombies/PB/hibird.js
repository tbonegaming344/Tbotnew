const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `hibird`,
	aliases: [`pbhibird`, `hibirdpb`, `hib`, `hbird`],
	category: `Professor Brainstorm(PB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT hibird FROM pbdecks`)
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].hibird}`)
	.setDescription(`${result[3].hibird}`)
	.setFooter({text: `${result[2].hibird}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].hibird}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].hibird}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].hibird}`,
				inline: true
			})
		.setColor("Purple")
		.setImage(`${result[4].hibird}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}