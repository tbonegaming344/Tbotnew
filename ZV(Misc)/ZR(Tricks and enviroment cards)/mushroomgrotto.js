const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `mushroomgrotto`,
	aliases: [`grotto`, `mg1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let mg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a6/Mushroom_Grotto_Environment.png/revision/latest/scale-to-width-down/150?cb=20170614061958")
		.setTitle("Mushroom Grotto | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant here, make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Puff-Shroom with __Team-Up__ in another random lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes beautiful things grow out of the darkest places. Ponder that for a few moments."
							 })
		message.channel.send({embeds: [mg]})
	}
}