const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `kingleap`,
	aliases: [`leapking`, `lk`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select kingleap from rbdecks`)
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].kingleap}`)
	.setDescription(`${result[3].kingleap}`)
	.setFooter({text:`${result[2].kingleap}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].kingleap}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].kingleap}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].kingleap}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`	${result[4].kingleap}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}