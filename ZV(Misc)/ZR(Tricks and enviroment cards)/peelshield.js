const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `peelshield`,
	aliases: [`peel`, `shield`, `ctsig`, `ps1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let peel = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107726555477704754/PeelShieldCardImage.webp")
		.setTitle("Peel Shield | <:Guardian:1062501130501885973><:Smarty:1062502890448638022>")
		.setDescription("**\\- Fruit Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants can't be hurt this turn. \nDraw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Orange you glad Citron is here to protect you?"
							 })
		message.channel.send({embeds: [peel]})
	}
}