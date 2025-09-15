const {EmbedBuilder}= require("discord.js")
const db = require("../../index.js")
module.exports = {
	name: `firepeashooter`,
	aliases: [`fire3`, `firepea`, `flame`, `flamepea`, `fp`, `fps`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select firepeashooter from megagrowcards`)
		const fp = new EmbedBuilder()
		.setThumbnail(`${result[4].firepeashooter}`)
		.setTitle(`${result[7].firepeashooter}`)
		.setDescription(`${result[2].firepeashooter}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].firepeashooter}`, 
							 inline: true},
							 {
								 name: "Set-Rarity",
								 value: `${result[5].firepeashooter}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].firepeashooter}`,
								 inline: true
							 })
		message.channel.send({embeds: [fp]})
	}
}