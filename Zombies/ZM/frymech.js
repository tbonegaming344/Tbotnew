const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `frymech`,
	aliases: [`mechfry`, `fryzmech`, `fryemupzmech`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT frymech FROM zmdecks`);
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].frymech}`)
	.setDescription(`${result[3].frymech}`)
	.setFooter({text: `${result[2].frymech}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].frymech}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].frymech}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].frymech}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].frymech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}