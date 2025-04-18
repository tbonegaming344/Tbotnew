const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `frozentelimps`,
	aliases: [`teleimpsonice`, `softcore`, `softcorebigfeetfetish`, `frozenteleimps`, `freezetelimps`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`SELECT frozentelimps FROM hgdecks`);
		const fti = new EmbedBuilder()
		.setTitle(`${result[5].frozentelimps}`)
		.setDescription(`${result[3].frozentelimps}`)
	.setColor("#000000")
		.setImage(`${result[4].frozentelimps}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].frozentelimps}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].frozentelimps}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].frozentelimps}`,
			inline: true
		})
		.setFooter({text: `${result[2].frozentelimps}`})
		message.channel.send({embeds: [fti]})
	}
}