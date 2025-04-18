const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bellflower`,
	aliases: [`bell`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const bell = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106977548925157446/Bellflower.webp")
		.setTitle("Bellflower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She wants to be friends with Snowdrop soooo badly, but she feels like she's always getting the cold shoulder."
							 })
		message.channel.send({embeds: [bell]})
	}
}