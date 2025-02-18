const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sunburn`,
	aliases: [`burn`, `sfsig`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let ss = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/24/SunburnCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226204403")
		.setTitle("Sunburn | <:Kabloom:1062502137826910268><:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 2 damage. \nYou get +1<:Sun:1062501177679413409> for the rest of the game. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Solar Flare never met a sunscreen strong enough to stop her."
							 })
		message.channel.send({embeds: [ss]})
	}
}