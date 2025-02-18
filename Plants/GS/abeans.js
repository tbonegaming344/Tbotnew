const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `abeans`,
	aliases: [`gsabeans`, `abeansgs`, `aggrobeans`, `abean`, `aggrobeans`, `aabeans`], 
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT abeans from gsdecks`);
let embed = new EmbedBuilder()
	.setTitle(`${result[5].abeans}`)
	.setDescription(`${result[3].abeans}`)
	.setFooter({text: `${result[2].abeans}`})
			.addFields({
			name: "Deck Type",
			value: `${result[6].abeans}`,
			inline: true
			},
			{
			name: "Archetype",
			value: `${result[0].abeans}`,
			inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].abeans}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].abeans}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}