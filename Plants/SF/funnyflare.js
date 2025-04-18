const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `funnyflare`,
	aliases: [`solarflaretroll`, `trf`, `trollflare`, `funnyflare`, `trollarflare`, `trollerflare`, `funnierflare`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT funnyflare from sfdecks`);
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
		.setColor("Yellow")
		.setImage(`${result[4].funnyflare}`)
	message.channel.send({embeds: [ fflare ] } ) 
	}
}