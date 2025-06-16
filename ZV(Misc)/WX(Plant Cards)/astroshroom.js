const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `astroshroom`,
	aliases: [`astro1`, `as1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`select astroshroom from kabloomcards`);
		const as = new EmbedBuilder()
		.setThumbnail(`${result[4].astroshroom}`)
		.setTitle(`${result[7].astroshroom}`)
		.setDescription(`${result[2].astroshroom}`)
		.setColor("Random")
		.addFields({name: "Stats",
							value: `${result[6].astroshroom}`,
							 inline: true},
							 {
								 name: "Trait",
								 value: `${result[8].astroshroom}`,
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].astroshroom}`,
								 inline: true
							 },
							 {
								 name: "Set-Rarity",
								 value: `${result[5].astroshroom}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].astroshroom}`,
								 inline: true
							 })
		message.channel.send({embeds: [as]})
	}
}