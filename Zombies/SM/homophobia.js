const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `homophobia`,
	aliases: [`smburn`],
	category: `Smash(SM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT homophobia FROM smdecks`)
		let smb = new EmbedBuilder()
		.setTitle(`${result[5].homophobia}`)
		.setDescription(`${result[3].homophobia}`)
		.setColor("Random")
		.setFooter({text: `${result[2].homophobia}`})
		.setImage(`${result[4].homophobia}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].homophobia}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].homophobia}`,
			inline: true
		},{
			name: "Deck Cost",
			value:`${result[1].homophobia}`,
			inline: true
		})
		message.channel.send({embeds: [smb]})
	}
}