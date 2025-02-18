const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `kitchenhg`,
	aliases: [`hgkitchen`, `kshe`, `kitchensinkhaseverything`, `hgkitchensink`, `kitchensinkhg`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT kitchenhg FROM hgdecks`)
			let embed = new EmbedBuilder()
			.setTitle(`${result[5].kitchenhg}`)
			.setDescription(`${result[3].kitchenhg}`)
			.setFooter({text: `${result[2].kitchenhg}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].kitchenhg}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].kitchenhg}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].kitchenhg}`,
				inline: true
			})
		.setColor("Random")
.setImage(`${result[4].kitchenhg}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}