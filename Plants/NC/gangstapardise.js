const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `gangstaparadise`,
	aliases: [`gangsta`, `gangsterpardise`, `gangster`,`gangsta'spardise`,`gangstasparadise`],
	category: `Night Cap(NC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT gangstaparadise from ncdecks`);
		let gangster = new EmbedBuilder()
		.setTitle(`${result[5].gangstaparadise}`)
		.setDescription(`${result[3].gangstaparadise}`)
	.setColor("Random")
	.addFields({
		name: "Deck Type",
		value: `${result[6].gangstaparadise}`,
		inline: true
	},{
		name: "Archetype",
		value: `${result[0].gangstaparadise}`,
		inline: true
	},{
		name: "Deck Cost", 
		value: `${result[1].gangstaparadise}`,
		inline: true})	
	.setImage(`${result[4].gangstaparadise}`)
	.setFooter({text: `${result[2].gangstaparadise}`})
	message.channel.send({embeds: [gangster]})
	}
}