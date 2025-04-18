const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `growshroom`,
	aliases: [`grow`, `gs2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
	 const gs = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/09a1333c-54d3-4c0c-8f29-3a6a0619d29e/scale-to-width/755")
		.setTitle("Grow-Shroom | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Another Plant gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's always bringing out the best in others."
							 })
		message.channel.send({embeds: [gs]})
	}
}