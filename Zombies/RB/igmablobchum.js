const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `igmablobchum`,
	aliases: [`blobchumigma`, `igmablobchumrb`, `igbc`, `ibc`, `blobchum`, `chumblob`, `igmachum`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select igmablobchum from rbdecks`)
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].igmablobchum}`)
	.setDescription(`${result[3].igmablobchum}`)
	.setFooter({text: `${result[2].igmablobchum}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].igmablobchum}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].igmablobchum}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].igmablobchum}`,
				inline: true
			})
		.setColor("Orange")
		.setImage(`${result[4].igmablobchum}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}