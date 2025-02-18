const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `torchwood`,
	aliases: [`torch`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let torch = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/0/04/TorchwoodCardImage.png/revision/latest?cb=20191225214028&path-prefix=protagonist")
		.setTitle("Torchwood | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "Peas behind this get +2<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Feel the burn, I COMMAND YOU!"`
							 })
		message.channel.send({embeds: [torch]})
	}
}