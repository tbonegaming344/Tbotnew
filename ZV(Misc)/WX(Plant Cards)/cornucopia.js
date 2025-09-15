const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `cornucopia`,
	aliases: [`cornucopium`, `copium`], 
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const [result] = await db.query(`select cornucopia from solarcards`);
		const cop = new EmbedBuilder()
		.setThumbnail(`${result[4].cornucopia}`)
		.setTitle(`${result[7].cornucopia}`)
		.setDescription(`${result[2].cornucopia}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].cornucopia}`, 
							inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].cornucopia}`, 
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cornucopia}`, 
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cornucopia}`, 
								 inline: true
							 })
		message.channel.send({embeds: [cop]})
	}
}