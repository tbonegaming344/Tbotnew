const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `powerpummel`,
	aliases: [`rumble`, `pummel`, `gksig`, `pp1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let pp= new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107731730305142834/PowerPummelCardImage.webp")
		.setTitle("Power Pummel | <:MegaGrow:1062501412992458802><:Guardian:1062501130501885973>")
		.setDescription("**\\- Leafy Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Attack each Zombie on the ground for 2 damage."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Knuckle sandwiches for all my enemies!"`
							 })
		message.channel.send({embeds: [pp]})
	}
}