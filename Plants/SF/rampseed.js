const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `ramp2seedling`,
	aliases: [`seedlingramp`, `rampseedling`, `ramptoseedling`, `r2s`, `rts`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		const [result] = await db.query(`SELECT ramp2seedling from sfdecks`); 
			const embed = new EmbedBuilder()
	.setTitle(`${result[5].ramp2seedling}`)
	.setDescription(`${result[3].ramp2seedling}`)
	.setFooter({text: `${result[2].ramp2seedling}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].ramp2seedling}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].ramp2seedling}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].ramp2seedling}`,
				inline: true
			})
		.setColor("Yellow")
.setImage(`${result[4].ramp2seedling}`)
	message.channel.send({embeds: [ embed ] } )
	}
}