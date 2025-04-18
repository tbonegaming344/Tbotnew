const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cosmicflower`,
	aliases: [`cf`, `cosmicsunflower`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cf = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107401936715661342/CosmicFlowerCardImage.webp")
		.setTitle("Cosmic Flower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Flower, and it gets <:Strikethrough:1062502987425140806>__Strikethrough__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She enjoys the simple things in life - hanging out with friends, fighting Zombies, and basking in cosmic rays."
							 })
		message.channel.send({embeds: [cf]})
	}
}