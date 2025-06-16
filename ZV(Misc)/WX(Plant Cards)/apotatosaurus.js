const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `apotatosaurus`,
	aliases: [`apotato`, `asurus`, `apo`, `bowlingcard`, `bowlingcard`, `bowlingbulbcard`, `bowlingbulbenjoyercard`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select apotatosaurus from megagrowcards`);	
		const ap = new EmbedBuilder()
		.setThumbnail(`${result[4].apotatosaurus}`)
		.setTitle(`${result[7].apotatosaurus}`)
		.setDescription(`${result[2].apotatosaurus}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].apotatosaurus}`,
								inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].apotatosaurus}`,
								 inline: true
							 },
							 { name: "\u200B", value: "\u200B", inline: true },
							 {
								 name: "Ability",
								 value: `${result[0].apotatosaurus}`, 
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].apotatosaurus}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].apotatosaurus}`,
								 inline: true
							 })
		message.channel.send({embeds: [ap]})
	}
}