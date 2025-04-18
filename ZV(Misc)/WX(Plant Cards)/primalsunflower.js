const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `primalsunflower`,
	aliases: [`psf`, `primalsun`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const psf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/89/PrimalSunflowerHD.png/revision/latest/scale-to-width-down/250?cb=20170804165257")
		.setTitle("Primal Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sunflowers are notorious pacifists. But isolated in the center of Hollow Earth, they evolved a new savagery. Sunny, adorable savagery."
							 })
		message.channel.send({embeds: [psf]})
	}
}