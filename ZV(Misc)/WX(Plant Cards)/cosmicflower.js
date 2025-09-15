const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js")
module.exports = {
	name: `cosmicflower`,
	aliases: [`cf`, `cosmicsunflower`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select cosmicflower from solarcards`)
		const cf = new EmbedBuilder()
		.setThumbnail(`${result[4].cosmicflower}`)
		.setTitle(`${result[7].cosmicflower}`)
		.setDescription(`${result[2].cosmicflower}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].cosmicflower}`, 
							inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].cosmicflower}`, 
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].cosmicflower}`, 
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].cosmicflower}`, 
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].cosmicflower}`,
								 inline: true
							 })
		message.channel.send({embeds: [cf]})
	}
}