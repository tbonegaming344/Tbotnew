const {EmbedBuilder}= require("discord.js")
module.exports ={
	name: `flourish`,
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const fl = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1104776610491678750/FlourishCardImage.webp")
		.setTitle("Flourish | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Draw two cards."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Call it a growth spurt."
							 })
		message.channel.send({embeds: [fl]})
	}
}