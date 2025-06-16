const {EmbedBuilder}= require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `bloomerang`,
	aliases: [`bloom`, `bloomer`, `boomerang`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select bloomerang from solarcards`);
		const bl = new EmbedBuilder()
		.setThumbnail(`${result[4].bloomerang}`)
		.setTitle(`${result[7].bloomerang}`)
		.setDescription(`${result[2].bloomerang}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].bloomerang}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].bloomerang}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].bloomerang}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].bloomerang}`,
								 inline: true
							 })
		message.channel.send({embeds: [bl]})
	}
}