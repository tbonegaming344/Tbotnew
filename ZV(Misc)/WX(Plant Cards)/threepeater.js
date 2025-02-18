const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `threepeater`,
	aliases: [`threepea1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let tp = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106573600863043584/HD_Threepeater_29.webp")
		.setTitle("Threepeater | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This attacks here and next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"My favorite number is 5."`
							 })
		message.channel.send({embeds: [tp]})
	}
}