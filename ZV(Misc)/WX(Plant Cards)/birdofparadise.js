const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `birdofparadise`, 
	aliases: [`bird`, `birb`, `paradise`, `bop`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const [result] = await db.query(`select birdofparadise from smartycards`);
		const bop = new EmbedBuilder()
		.setThumbnail(`${result[4].birdofparadise}`)
		.setTitle(`${result[7].birdofparadise}`)
		.setDescription(`${result[2].birdofparadise}`)
		.setColor("Random")
		.addFields({name: "Stats",
								value: `${result[6].birdofparadise}`,
							inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].birdofparadise}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].birdofparadise}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].birdofparadise}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].birdofparadise}`,
								 inline: true
							 })
		message.channel.send({embeds: [bop]})
	}
}