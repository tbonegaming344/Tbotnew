const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `funnyflare`,
	aliases: [`solarflaretroll`, `trf`, `trollflare`, `funnyflare`, `trollarflare`, `trollerflare`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT funnyflare from sfdecks`);
			let	fflare = new EmbedBuilder()
			.setTitle(`${result[5].funnyflare}`)	
			.setDescription(`${result[3].funnyflare}`)
			.setFooter({text:`${result[2].funnyflare}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].funnyflare}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].funnyflare}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].funnyflare}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].funnyflare}`)
	message.channel.send({embeds: [ fflare ] } ) 
	}
}