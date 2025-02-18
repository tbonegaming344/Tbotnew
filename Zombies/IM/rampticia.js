const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `rampticia`,
	aliases: [`rampaticia`, `imramp`, `rampim`, `rampimmorticia`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT rampticia FROM imdecks`)
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].rampticia}`)
	.setDescription(`${result[3].rampticia}`)
	.setFooter({text:`${result[2].rampticia}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].rampticia}`,
				inline: true
			},{
				name: "Archetype", 
				value: `${result[0].rampticia}`,
				inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].rampticia}`,
				inline: true
			})
		.setColor("Random")		
		.setImage(`${result[4].rampticia}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}