const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `seedling`,
	aliases: [`seed`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select seedling from kabloomcards`);
		const seed = new EmbedBuilder()
		.setThumbnail(`${result[4].seedling}`)
		.setTitle(`${result[7].seedling}`)
		.setDescription(`${result[2].seedling}`)
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: `${result[6].seedling}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].seedling}`,
								 inline: true
							 },
							 {
								 name:"Set-Rarity",
								 value: `${result[5].seedling}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].seedling}`,
								 inline: true
							 })
		message.channel.send({embeds: [seed]})
	}
}