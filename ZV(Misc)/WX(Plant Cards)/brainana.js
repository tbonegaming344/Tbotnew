const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `brainana`,
	aliases: [`brainna`, `braindamage`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select brainana from smartycards`);
		const br = new EmbedBuilder()
		.setThumbnail(`${result[4].brainana}`)
		.setTitle(`${result[7].brainana}`)
		.setDescription(`${result[2].brainana}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].brainana}`,
							 	inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].brainana}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].brainana}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].brainana}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].brainana}`,
								 inline: true
							 })
		message.channel.send({embeds: [br]})
	}
}