const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `translattail`,
	category: `Night Cap(NC)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT translattail from ncdecks`);
	const embed = new EmbedBuilder()
	.setTitle(`${result[5].translattail}`)
	.setDescription(`${result[3].translattail}`)
	.setFooter({text: `${result[2].translattail}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].translattail}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].translattail}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value:`${result[1].translattail}`,
				inline: true
			})
		.setColor("White")		
		.setImage(`${result[4].translattail}`)
	message.channel.send({embeds: [ embed ] } )
	}
}