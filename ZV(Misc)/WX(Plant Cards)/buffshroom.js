const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `buffshroom`,
	aliases: [`buff`, `bs2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const bs = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b1/HD_Buff-Shroom.png/revision/latest?cb=20160502034843")
		.setTitle("Buff-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** All Mushrooms get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `You might know him from his wildly popular series of workout videos called "30 Days to a Buff-Shroom Body."`
							 })
		message.channel.send({embeds: [bs]})
	}
}