const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `himpter`, 
	aliases: [`huntinggroundimps`, `huntingimps`, `huntimps`, `himps`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT himps FROM bfdecks`)
				let embed = new EmbedBuilder()
	.setTitle(`${result[5].himps}`)	
			.setDescription(`${result[3].himps}`)
	.setFooter({text: `${result[2].himps}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].himps}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].himps}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].himps}`,
				inline: true
			})
		.setColor("Random")		
		.setImage(`${result[4].himps}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}