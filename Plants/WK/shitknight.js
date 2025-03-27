const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `shitknight`,
	aliases: [`worstwkdeck`, `sk`, ` shit-knight`, `shitwk`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT shitknight from wkdecks`);
				let embed = new EmbedBuilder()
	.setTitle(`${result[5].shitknight}`)	
			.setDescription(`${result[3].shitknight}`)
	.setFooter({text: `${result[2].shitknight}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].shitknight}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].shitknight}`,
				inline: true
			},
			{
				name: "Deck Cost", 
				value:  `${result[1].shitknight}`,
				inline: true
		})
		.setColor("Yellow")			
		.setImage(`${result[4].shitknight}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}