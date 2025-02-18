const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `fryhmr`,
	aliases: [`mrfry`, `frymr`, `midrosefry`, `frymid`, `frymidro`, `rofrymid`, `frymidrose`, `fryhealmidrose`, `fryheamid`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT frymidrose from rodecks`);
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].frymidrose}`)
	.setDescription(`${result[3].frymidrose}`)
	.setFooter({text: `${result[2].frymidrose}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].frymidrose}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].frymidrose}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].frymidrose}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].frymidrose}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}