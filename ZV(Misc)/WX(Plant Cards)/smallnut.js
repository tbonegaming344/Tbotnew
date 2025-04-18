const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `smallnut`,
	aliases: [`small`, `sn1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6a/HD_Small-Nut.png/revision/latest?cb=20160630003856")
		.setTitle("Small-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A violin virtuoso, Small-Nut began taking lessons when he was still in the shell."
							 })
				message.channel.send({embeds: [sm]})
	}
}