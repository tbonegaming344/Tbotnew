const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bananabomb`,
	aliases: [`bbomb`, `bomb1`, `bb2`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const bb = new EmbedBuilder()
		.setThumbnail(`${result[4].bananabomb}`)
		.setTitle(`${result[7].bananabomb}`)
		.setDescription(`${result[2].bananabomb}`)
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: `${result[6].bananabomb}`,
							 inline: true},
							 {
								 name: "Ability",
								 value: `${result[0].bananabomb}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].bananabomb}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].bananabomb}`,
								 inline: true
							 })
		message.channel.send({embeds: [bb]})
	}
}