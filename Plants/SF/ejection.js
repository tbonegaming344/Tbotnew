const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `ejection`,
	aliases: [`ejectionsf`, `sfejecton`, `ejsf`, `sfej`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT ejection from sfdecks`);
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].ejection}`)
	.setDescription(`${result[3].ejection}`)
	.setFooter({text: `${result[2].ejection}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].ejection}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].ejection}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].ejection}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].ejection}`)
	message.channel.send({embeds: [ embed ] } )
	}
}