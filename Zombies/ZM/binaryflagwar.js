const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports ={
	name: `binaryflagwar`,
	aliases: [`warbinaryflag`, `bfwar`],
	category: `Zmech(ZM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT binaryflagwar FROM zmdecks`);
		let bfw = new EmbedBuilder()
		.setTitle(`${result[5].binaryflagwar}`)
		.setDescription(`${result[3].binaryflagwar}`)
		.setColor("Random")
		.setFooter({text: `${result[2].binaryflagwar}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].binaryflagwar}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].binaryflagwar}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].binaryflagwar}`,
			inline: true
		})
		.setImage(`${result[4].binaryflagwar}`)
		message.channel.send({embeds: [bfw]})
	}
}