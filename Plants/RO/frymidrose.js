const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `fryhmr`,
	aliases: [`mrfry`, `frymr`, `midrosefry`, `frymid`, `frymidro`, `rofrymid`, `frymidrose`, `fryhealmidrose`, `fryheamid`, ` fry’shmr`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT frymidrose from rodecks`);
			const embed = new EmbedBuilder()
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
		.setColor("Yellow")
.setImage(`${result[4].frymidrose}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}