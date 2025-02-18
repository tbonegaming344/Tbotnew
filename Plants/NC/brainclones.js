const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `brainclones`, 
	aliases: [`brainclone`, `clonebrain`, `clonebrains`],
	category: `Night Cap(NC)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT brainclones from ncdecks`);
		let bclones = new EmbedBuilder()
		.setTitle(`${result[5].brainclones}`)
		.setDescription(`${result[3].brainclones}`)
		.setColor("Random")
		.setFooter({text: `${result[2].brainclones}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].brainclones}`,
			inline: true
		},
		{
			name: "Archetype",
			value: `${result[0].brainclones}`,
			inline: true
		},
		{
			name: "Deck Cost", 
			value: `${result[1].brainclones}`,
			inline: true})
.setImage(`${result[4].brainclones}`)
		message.channel.send({embeds: [bclones]})
	}
}