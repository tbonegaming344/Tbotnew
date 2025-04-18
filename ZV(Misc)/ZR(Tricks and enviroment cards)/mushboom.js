const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `mushboom`,
	aliases: [`boom`, `ncsig`, `mb1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const mb= new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/31/MushBoomCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225214330")
		.setTitle("Mush-Boom | <:Kabloom:1062502137826910268><:Smarty:1062502890448638022>")
		.setDescription("**\\- Mushroom Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Poison Mushroom with __Anti-Hero 2__. \nDo 2 damage to a Zombie there. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Nightcap and his mushroom friends are not to be truffled with."
							 })
		message.channel.send({embeds: [mb]})
	}
}