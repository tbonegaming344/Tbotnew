const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `forgetmenuts`,
	aliases: [`fmn`, `forgor`, `forgorme`, `forgormenuts`, `forgetme`, `forget`],
	category: `Plant Cards`,
	run: async(client,message,args)=> {
		const [result] = await db.query(`select fmn from guardiancards`)
		const fmn = new EmbedBuilder()
		.setThumbnail(`${result[4].fmn}`)
		.setTitle(`${result[7].fmn}`)
		.setDescription(`${result[2].fmn}`)
		.addFields({name: "Stats", 
							 value: `${result[6].fmn}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].fmn}`, 
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].fmn}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].fmn}`,
								 inline: true
							 })
			.setColor("Random")
			message.channel.send({embeds: [fmn]})
	}
}