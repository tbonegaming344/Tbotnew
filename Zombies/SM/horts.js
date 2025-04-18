const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
	name: `horts`,
	aliases: [`huntsports`, `hortsm`, `smhorts`,],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT horts FROM smdecks`);
		const embed = new EmbedBuilder()
	.setTitle(`${result[5].horts}`)
	.setDescription(`${result[3].horts}`)
	.setFooter({text: `${result[2].horts}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].horts}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].horts}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].horts}`,
				inline: true
			})
		.setColor("Blue")
		.setImage(`${result[4].horts}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}