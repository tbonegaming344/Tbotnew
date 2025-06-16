const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `bamboozle`,
	aliases: [`bamboo`, `bam`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const [result] = await db.query(`select bamboozle from megagrowcards`);
		const bam = new EmbedBuilder()
		.setThumbnail(`${result[4].bamboozle}`)
		.setTitle(`${result[7].bamboozle}`)
		.setDescription(`${result[2].bamboozle}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].bamboozle}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].bamboozle}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].bamboozle}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].bamboozle}`,
								 inline: true
							 })
		message.channel.send({embeds: [bam]})
	}
}