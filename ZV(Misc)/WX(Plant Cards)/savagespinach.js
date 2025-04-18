const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `savagespinach`,
	aliases: [`savage`, `spinach`, `ss6`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const ss = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/38/SavageSpinachHD.png/revision/latest/scale-to-width-down/250?cb=20180209112308")
		.setTitle("Savage Spinach | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Leafy Evolution__:** All Plants in all lanes and your hand get +2<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Neptuna planned her Triassic Invasion perfectly. But like so many conqueror before her, she underestimated the Spinach."
							 })
		message.channel.send({embeds: [ss]})
	}
}