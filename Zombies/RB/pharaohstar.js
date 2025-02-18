const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `pharaohster`,
	aliases: [`pharaohtrickster`, `pt`, `pharohster`, `pharoahster`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) =>{
		let [result] = await db.query(`select pharaohster from rbdecks`)
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].pharaohster}`)
	.setDescription(`${result[3].pharaohster}`)
	.setFooter({text: `${result[2].pharaohster}`})
				.addFields({
					name: "Deck Type",
					value: `${result[6].pharaohster}`,
					inline: true
				},{
					name: "Archetype",
					value: `${result[0].pharaohster}`,
					inline: true
				},{
					name: "Deck Cost", 
					value: `${result[1].pharaohster}`,
					inline: true
				})
		.setColor("Random")
		.setImage(`${result[4].pharaohster}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}