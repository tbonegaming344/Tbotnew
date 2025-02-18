const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name:  `igmaburn`,
	aliases: [`burnigma`, `iburn`, `overshootboog`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT igmaburn FROM ebdecks`)
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].igmaburn}`)	
			.setDescription(`${result[3].igmaburn}`)
	.setFooter({text: `${result[2].igmaburn}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].igmaburn}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].igmaburn}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].igmaburn}`,
				inline: true
			})
		.setColor("Random")			
		.setImage(`${result[4].igmaburn}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}