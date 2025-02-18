const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: 'mimescibolt',
	aliases: [`mimebolt`, `comboscience`, `sciencecombo`, `mimesci`, `scicombo`, `combosci`, `scimine`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select mimescibolt from rbdecks`)
		let msb = new EmbedBuilder()
		.setTitle(`${result[5].mimescibolt}`)
		.setDescription(`${result[3].mimescibolt}`)
		.setFooter({text:`${result[2].mimescibolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].mimescibolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].mimescibolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].mimescibolt}`,
			inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].mimescibolt}`)
		message.channel.send({embeds: [msb]})
	}
}