const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `cactus`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select cactus from guardiancards`);
		const cac = new EmbedBuilder()
			.setThumbnail(`${result[4].cactus}`)
		.setTitle(`${result[7].cactus}`)
		.setDescription(`${result[2].cactus}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 value: `${result[6].cactus}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].cactus}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cactus}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cactus}`,
								 inline: true
							 })
		message.channel.send({embeds: [cac]})
	}
}