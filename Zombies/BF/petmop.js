const {EmbedBuilder} = require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `petmop`,
	aliases: [`moppets`],
		category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`SELECT petmop FROM bfdecks`)
		const pmop = new EmbedBuilder()
		.setTitle(`${result[5].petmop}`)
		.setDescription(`${result[3].petmop}`)
		.setColor("Blue")
		.setFooter({text: `${result[2].petmop}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].petmop}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].petmop}`,
				inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].petmop}`,
				inline: true
			})
		.setImage(`${result[4].petmop}`)
		message.channel.send({embeds: [pmop]})
	}
}