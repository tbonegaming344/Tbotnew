const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js");
module.exports = {
	name: `healburn`,
	aliases: [`burnheal`, `hburn`, `comboflare`, `xpcomboflare`, `xphealburn`],
	category: `Solar Flare(SF)`,
	run: async(client,message, args) => {
		const [result] = await db.query(`SELECT healburn from sfdecks`);
		const hb = new EmbedBuilder()
		.setTitle(`${result[5].healburn}`)
		.setDescription(`${result[3].healburn}`)
		.setFooter({text: `${result[2].healburn}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].healburn}`,
			inline: true
		},
		{
			name: "Archetype",
			value: `${result[0].healburn}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].healburn}`,
			inline: true
		})
.setImage(`${result[4].healburn}`)
		
		.setColor("Yellow")
		message.channel.send({embeds: [hb]})
	}
}