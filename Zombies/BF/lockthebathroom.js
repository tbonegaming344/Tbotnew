const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `lockthebathroom`,
	aliases: [`lockinbf`, `loi`, `lockedin`, `loin`, `lockin`, `lockin`, `ltb`, `ltbath`, `ltbr`, `lthbroom`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT lockin FROM bfdecks`)
				let embed = new EmbedBuilder()
	.setTitle(`${result[5].lockin}`)	
			.setDescription(`${result[3].lockin}`)
	.setFooter({text: `${result[2].lockin}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].lockin}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].lockin}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].lockin}`,
				inline: true
			})
		.setColor("Blue")			
		.setImage(`${result[4].lockin}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}