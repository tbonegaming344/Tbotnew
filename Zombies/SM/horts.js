const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `horts`,
	aliases: [`huntsports`, `hortsm`, `smhorts`,],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT horts FROM smdecks`);
		let embed = new EmbedBuilder()
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
		.setColor("Random")
		.setImage(`${result[4].horts}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}