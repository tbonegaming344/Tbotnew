const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `magnifyinggrass`,
	aliases: [`mag`, 	`magnifying`, `mg3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let mg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/53/MagnifyingGrass.png/revision/latest/scale-to-width-down/250?cb=20170906160729")
		.setTitle("Magnifying Grass | <:Solar:1062502678384607262>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1<:Strength:1062501774612779039> for each Sun you made this turn."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies may appear closer than they are."
							 })
		message.channel.send({embeds: [mg]})
	}
}