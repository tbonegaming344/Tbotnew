const {EmbedBuilder}= require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `freezeheal`,
	aliases: [`freal`, `heeze`, `healfreeze`],
		category: `Rose(RO)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT freezeheal from rodecks`);
		let fr = new EmbedBuilder()
		.setTitle(`${result[5].freezeheal}`)
		.setDescription(`${result[3].freezeheal}`)
		.setFooter({text: `${result[2].freezeheal}`})
		.setColor("Yellow")
		.addFields({
			name: "Deck Type",
			value: `${result[6].freezeheal}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].freezeheal}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].freezeheal}`,
			inline: true
		})
		.setImage(`${result[4].freezeheal}`)
		message.channel.send({embeds: [fr]})
	}
}