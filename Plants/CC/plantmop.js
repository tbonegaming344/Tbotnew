const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `plantmop`,
	aliases: [`plantmopisreal`, `sjutuxoilve`, `pm`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT plantmop from ccdecks`);
				let embed = new EmbedBuilder()
	.setTitle(`${result[5].plantmop}`)
	.setDescription(`${result[3].plantmop}`)
	.setFooter({text: `${result[2].plantmop}`})
				.addFields(
					{
					name: "Deck Type",
					value:`${result[6].plantmop}`,
					inline: true
					},
					{
					name: "Archetype",
					value:`${result[0].plantmop}`,
					inline: true
					},
					{
					name: "Deck Cost", 
					value: `${result[1].plantmop}`,
					inline: true
				})
		.setColor("Random")			
		.setImage(`${result[4].plantmop}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}