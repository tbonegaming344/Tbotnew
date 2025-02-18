const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `splitpea`,
	aliases: [`split`, `sp3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let sp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/SplitPea.png/revision/latest/scale-to-width-down/250?cb=20220209001732")
		.setTitle("Split Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Before combat here:** This does 1 damage to the Plant Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"All I wanted in life was to get ahead. But it kinda grew on me. How to face the future? I'm on two minds."`
							 })
		message.channel.send({embeds: [sp]})
	}
}