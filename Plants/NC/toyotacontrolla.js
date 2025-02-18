const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `toyotacontrolla`,
    aliases: [`controlcap`, `toyotacap`, `nccontrol`, `controlnc`, `toyota`],
	category: `Night Cap(NC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT toyotacontrolla from ncdecks`);
	let embed = new EmbedBuilder()
	.setTitle(`${result[5].toyotacontrolla}`)
	.setDescription(`${result[3].toyotacontrolla}`)
	.setFooter({text: `${result[2].toyotacontrolla}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].toyotacontrolla}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].toyotacontrolla}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value:`${result[1].toyotacontrolla}`,
				inline: true
			})
		.setColor("Random")		
		.setImage(`${result[4].toyotacontrolla}`)
	message.channel.send({embeds: [ embed ] } )
	}
}