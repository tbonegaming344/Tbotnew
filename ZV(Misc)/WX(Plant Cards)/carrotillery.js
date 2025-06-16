const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js")
module.exports = {
	name: `carrotillery`,
	aliases: [`carrot2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select carrotillery from smartycards`);
		const c = new EmbedBuilder()
		.setThumbnail(`${result[4].carrotillery}`)
		.setTitle(`${result[7].carrotillery}`)
		.setDescription(`${result[2].carrotillery}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].carrotillery}`,
							 	inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].carrotillery}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].carrotillery}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].carrotillery}`,
								 inline: true
							 })
		message.channel.send({embeds: [c]})
	}
}