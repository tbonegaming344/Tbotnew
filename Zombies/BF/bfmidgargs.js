const {EmbedBuilder} = require("discord.js")
const db = require("../../index.js")
module.exports= {
    name: `bfmidgargs`, 
    aliases: [`midgargsbf`],
    category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		let [result] =	await db.query("select bfmidgargs from bfdecks")
		let bfmg = new EmbedBuilder()
		.setTitle(`${result[5].bfmidgargs}`)
		.setDescription(`${result[3].bfmidgargs}`)
		.setColor("Blue")
		.setFooter({text: `${result[2].bfmidgargs}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].bfmidgargs}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].bfmidgargs}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].bfmidgargs}`,
			inline: true
		})
		.setImage(`${result[4].bfmidgargs}`)
        message.channel.send({embeds: [bfmg]})
}
}