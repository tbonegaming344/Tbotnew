const {EmbedBuilder} = require("discord.js");
const db = require('../../index.js')
module.exports = {
	name: `dozzamech`,
	aliases: [`mechdozza`, `dozzazmech`, `dozzazm`, `dzm`, `theresultofbeingupsidedown`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT dozzamech FROM zmdecks`);
			const embed = new EmbedBuilder()
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
		.setColor("Purple")
		.setImage(`${result[4].dozzamech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}