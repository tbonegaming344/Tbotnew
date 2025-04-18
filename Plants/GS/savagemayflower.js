const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `savagemayflower`,
	aliases: [`savagemay`, `savageflower`, `mayflowersavage`, `smf`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args)=> {
		const [result] = await db.query(`SELECT savagemayflower from gsdecks`);
		const smf = new EmbedBuilder()
		.setTitle(`${result[5].savagemayflower}`)
		.setDescription(`${result[3].savagemayflower}`)
		.setColor("White")
		.addFields({
			name: "Deck Type",
			value: `${result[6].savagemayflower}`,
			inline: true
		},
		{
			name: "Archetype",
			value: `${result[0].savagemayflower}`,
			inline: true
		},
		{
			name: "Deck Cost", 
			value:`${result[1].savagemayflower}`,
			inline: true
		})
		.setFooter({text: `${result[2].savagemayflower}`})
		.setImage(`${result[4].savagemayflower}`)
		message.channel.send({embeds: [smf]})
	}
}