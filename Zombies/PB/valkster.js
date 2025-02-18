const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `valkster`,
	aliases: [`valktrickster`, `valksterpb`, `pbvalkster`, `vt`, `valktricksterhybrid`, `valksterhybrid`, `vster`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT valkster FROM pbdecks`)
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].valkster}`)
	.setDescription(`${result[3].valkster}`)
	.setFooter({text: `${result[2].valkster}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].valkster}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].valkster}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].valkster}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].valkster}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}