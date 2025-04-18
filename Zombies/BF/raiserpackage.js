const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
	name: `raiserpackage`,
	aliases: [`packageraiser`, `raiserpackagebf`, `raiserpack`, `rpack`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
			const [result] = await db.query(`SELECT raiserpackage FROM bfdecks`)
				const embed = new EmbedBuilder()
	.setTitle(`${result[5].raiserpackage}`)	
			.setDescription(`${result[3].raiserpackage}`)
	.setFooter({text: `${result[2].raiserpackage}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].raiserpackage}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].raiserpackage}`,
				inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].raiserpackage}`,
				inline: true
			})
		.setColor("Blue")			
		.setImage(`${result[4].raiserpackage}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}