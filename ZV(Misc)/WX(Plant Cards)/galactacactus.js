const {EmbedBuilder} = require("discord.js"); 
const db = require("../../index.js");         
module.exports = {
	name: `galactacactus`,
	aliases: [`galacta`, `gaca`, `gc`],
	category: `Plant Cards`,
	run: async(client,message,args)=> {
		const [result] = await db.query(`select galacta from guardiancards`)
		const gaca = new EmbedBuilder()
			.setThumbnail(`${result[4].galacta}`)
		.setTitle(`${result[7].galacta}`)
		.setDescription(`${result[2].galacta}`)
		.addFields({name: "Stats", 
							 value: `${result[6].galacta}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].galacta}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].galacta}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].galacta}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].galacta}`,
								 inline: true
							 })
			.setColor("Random")
			
			message.channel.send({embeds: [gaca]})
	}
}