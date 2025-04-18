const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `peapatch`,
	aliases: [`patch2`, `pp6`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const pp = new EmbedBuilder()
		.setThumbnail("https://images-ext-1.discordapp.net/external/p5oBA5_3xE-T7x12aN7N5WMuX2j_4Wbu-Sf6MZC0wek/%3Fcb%3D20211017015609/https/static.wikia.nocookie.net/plantsvszombies/images/d/d4/Pea_Patch_HD.png/revision/latest/scale-to-width-down/250")
		.setTitle("Pea Patch | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** A plant played on this gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't const the Dog Walker anywhere near it."
							 })
		message.channel.send({embeds: [pp]})
	}
}