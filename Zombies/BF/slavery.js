const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `slavery`,
	aliases: [`bfsecret`, `secretbf`, `secretlyfry`,`secretpirates`, `piratesecret`],
		category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		let [result] =	await db.query("select slavery from bfdecks")
		let sp = new EmbedBuilder()
		.setTitle(`${result[5].slavery}`)
		.setDescription(`${result[3].slavery}`)
		.setColor("Blue")
		.setFooter({text: `${result[2].slavery}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].slavery}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].slavery}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].slavery}`,
			inline: true
		})
		.setImage(`${result[4].slavery}`)
		message.channel.send({embeds: [sp]})
	}
}