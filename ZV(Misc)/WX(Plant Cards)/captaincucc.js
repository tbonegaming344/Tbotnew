const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `captaincucumber`,
	aliases: [`cucc`, `ccuc`, `cucumber`, `cc1`, `captaincucc`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select captaincucumber from megagrowcards`);
		const cucc = new EmbedBuilder()
		.setThumbnail(`${result[4].captaincucumber}`)
		.setTitle(`${result[7].captaincucumber}`)
		.setDescription(`${result[2].captaincucumber}`)
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: `${result[6].captaincucumber}`,
								inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].captaincucumber}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].captaincucumber}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].captaincucumber}`,
								 inline: true
							 })
		message.channel.send({embeds: [cucc]})
	}
}