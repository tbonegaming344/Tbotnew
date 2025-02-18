const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `invasivespecies`,
	aliases: [`invasive`, `is`, `species`, `weed2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let is = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4a/Not_HD_Invasive_Species.png/revision/latest?cb=20200224090056")
		.setTitle("Invasive Species | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Leafy Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in an Environment:** This gets +3<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Call me a 'weed.' Go on. I consider it a compliment."`
							 })
		message.channel.send({embeds: [is]})
	}
}