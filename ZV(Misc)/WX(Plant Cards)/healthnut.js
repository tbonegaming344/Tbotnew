const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `healthnut`,
	aliases: [`hn`, `health`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const hn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a4/Health-Nut_HD.png/revision/latest?cb=20170227010004")
		.setTitle("Health-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "0 <:Strength:1062501774612779039>, 4 <:healthstrength:1062502584256045147>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This attacks using its <:Health:1062515540712751184> instead of its <:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He always skips leg day."
							 })
		message.channel.send({embeds: [hn]})
	}
}