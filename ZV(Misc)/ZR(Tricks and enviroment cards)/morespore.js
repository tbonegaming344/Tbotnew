const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `morespore`,
	aliases: [`more`, `spore`, `ms2`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let ms = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107663155871612969/MoreSporeCardIcon.webp")
		.setTitle("More Spore | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in a lane of your choice. Then another  appears in a random lanes."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "One good mushroom deserves another."
							 })
		message.channel.send({embeds: [ms]})
	}
}