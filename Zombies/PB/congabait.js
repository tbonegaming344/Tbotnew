const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports= {
	name: `congabait`,
	aliases: [`baitconga`,`cbait`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select congabait from pbdecks`)
		let cbait = new EmbedBuilder()
		.setTitle(`${result[5].congabait}`)
		.setDescription(`${result[3].congabait}`)
		.setColor("Purple")
		.setFooter({text: `${result[2].congabait}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].congabait}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].congabait}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].congabait}`,
			inline: true
		})
		.setImage(`${result[4].congabait}`)
		message.channel.send({embeds: [cbait]})
	}
}