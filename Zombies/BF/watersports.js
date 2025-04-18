const {EmbedBuilder} = require("discord.js")
const db = require("../../index.js")
module.exports= {
    name: `watersports`, 
    aliases: [`omorashi`, `bffreeze`, `freezebf`],
    category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		const [result] =	await db.query("select watersports from bfdecks")
		const ws = new EmbedBuilder()
		.setTitle(`${result[5].watersports}`)
		.setDescription(`${result[3].watersports}`)
		.setColor("Blue")
		.setFooter({text: `${result[2].watersports}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].watersports}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].watersports}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].watersports}`,
			inline: true
		})
		.setImage(`${result[4].watersports}`)
        message.channel.send({embeds: [ws]})
}
}