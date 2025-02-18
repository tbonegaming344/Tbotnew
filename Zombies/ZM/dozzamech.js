const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js')
module.exports = {
	name: `dozzamech`,
	aliases: [`mechdozza`, `dozzazmech`, `dozzazm`, `dzm`, `theresultofbeingupsidedown`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT dozzamech FROM zmdecks`);
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].dozzamech}`)
	.setDescription(`${result[3].dozzamech}`)
	.setFooter({text: `${result[2].dozzamech}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].dozzamech}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].dozzamech}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].dozzamech}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].dozzamech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}