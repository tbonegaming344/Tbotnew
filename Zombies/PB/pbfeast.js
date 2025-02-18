const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `pbfeast`,
	aliases: [`feastpb`, `feastcontrolpb`, `controlfeastpb`, `antitbone`, `pbgargfeast`, `gargfeastpb`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT pbfeast FROM pbdecks`)
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].pbfeast}`)
	.setDescription(`${result[3].pbfeast}`)
	.setFooter({text: `${result[2].pbfeast}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].pbfeast}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].pbfeast}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].pbfeast}`,
				inline: true
			})
		.setColor("Random")		
		.setImage(`${result[4].pbfeast}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}