const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `pyschopineclones`,
	aliases: [`physcoclones`, `pyscho`, `psychopineclones`, `psychopineclone`, `pyschopineclone`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) =>	{
		let [result] = await db.query(`SELECT psychopineclones from sfdecks`);
			let embed = new EmbedBuilder()
	.setTitle(`${result[5].psychopineclones}`)
	.setDescription(`${result[3].psychopineclones}`)
	.setFooter({text: `${result[2].psychopineclones}`})
				.addFields({
					name: "Deck Type",
					value: `${result[6].psychopineclones}`,
					inline: true
				},
				{
					name: "Archetype",
					value: `${result[0].psychopineclones}`,
					inline: true
				},{
					name: "Deck Cost", 
					value: `${result[1].psychopineclones}`,
					inline: true
				})
		.setColor("Random")
		.setImage(`${result[4].psychopineclones}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}