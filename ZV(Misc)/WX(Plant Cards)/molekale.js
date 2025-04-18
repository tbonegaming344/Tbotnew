const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `molekale`,
	aliases: [`mole`, `kale`, `mokale`, `molkale`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const mole = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/45/Molekale_HD.png/revision/latest/scale-to-width-down/250?cb=20170225005916")
		.setTitle("Molekale | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Each other Plant transforms into a random Plant that costs 1<:Sun:1062501177679413409> more."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"And you thought spinach made you strong. Please. I am spinach times infinity."`
							 })
		message.channel.send({embeds: [mole]})
	}
}