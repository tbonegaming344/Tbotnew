const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bananasaurusrex`,
	aliases: [`brex`, `bananasaurus`, `rex`, `br1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let brex = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1140729997942861954/Bananasaurus_rex.webp")
		.setTitle("Bananasaurus Rex | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Animal Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:DoubleStrike:1062501703494160394>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Ability",
								 value: "**Dino-Roar:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's a banana first and a dinosaur second. But it's a close second."
							 })
		message.channel.send({embeds: [brex]})
	}
}