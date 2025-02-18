const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name:`bobertsmash`,
	aliases: [`bsmash`, `smashbob`, `bobsmash`, `bbs`], 
	category: `Smash(SM)`,
	run: async(client, message, args) => {
				let [result] = await db.query(`SELECT bobertsmash FROM smdecks`)
				let embed = new EmbedBuilder()
	.setTitle(`${result[5].bobertsmash}`)
	.setDescription(`${result[3].bobertsmash}`)
	.setFooter({text: `${result[2].bobertsmash}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].bobertsmash}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].bobertsmash}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].bobertsmash}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].bobertsmash}`)
	message.channel.send({embeds: [ embed ] } )
	}
}