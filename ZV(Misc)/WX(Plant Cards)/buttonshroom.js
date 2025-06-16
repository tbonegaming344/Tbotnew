const {EmbedBuilder}= require("discord.js"); 
const db = require(`../../index.js`);
module.exports = {
	name: `buttonmushroom`,
	aliases: [`button`, `buttonshroom`, `bm`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select buttonmushroom from kabloomcards`);
		const bm = new EmbedBuilder()
		.setThumbnail(`${result[4].buttonmushroom}`)
		.setTitle(`${result[7].buttonmushroom}`)
		.setDescription(`${result[2].buttonmushroom}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].buttonmushroom}`,
								inline: true},
							 {
								 name: "Set-Rarity",
								 value: `${result[5].buttonmushroom}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].buttonmushroom}`,
								 inline: true
							 })
		message.channel.send({embeds: [bm]})
	}
}