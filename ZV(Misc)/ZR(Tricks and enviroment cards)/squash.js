const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `squash`,
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let sq = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107477157732692058/squash.webp?width=231&height=282")
		.setTitle("Squash | <:Solar:1062502678384607262>")
		.setDescription("**\\- Squash Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Has a bad case of Resting Squash Face. "
							 })
		message.channel.send({embeds: [sq]})
	}
}