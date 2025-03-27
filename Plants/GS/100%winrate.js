const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `100%winrate`,
	aliases: [`100%winrategs`, `100%wr`, `100%`, `100wr`, `maxiumbeanstalk`, `maximumbeanstalk`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT wr100 from gsdecks`);
		let embed = new EmbedBuilder()
	.setTitle(`${result[5].wr100}`)
	.setDescription(`${result[3].wr100}`)
	.setFooter({text: `${result[2].wr100}`})
			.addFields({
			name: "Deck Type",
			value: `${result[6].wr100}`,
			inline: true
			},
			{
			name: "Archetype",
			value: `${result[0].wr100}`,
			inline: true
			},
			{
				name: "Deck Cost", 
				value: `${result[1].wr100}`,
				inline: true
			})
		.setColor("White")
.setImage(`${result[4].wr100}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}