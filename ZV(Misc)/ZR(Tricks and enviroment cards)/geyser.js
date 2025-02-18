const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `geyser`,
	aliases: [`heal1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let gy = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107677302407581696/GeyserCardSprite.webp")
		.setTitle("Geyser | <:Solar:1062502678384607262>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Heal your Hero and all Plants for 4. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "H2Oh no you didn't!"
							 })
		message.channel.send({embeds: [gy]})
	}
}