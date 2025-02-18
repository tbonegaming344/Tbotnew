const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `metalpetalsunflower`,
	aliases: [`metal`, `petal`, `metalpetal`, `metalpetalsun`, `mps`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let mps = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/39/HD_Metal_Petal_Sunflower.png/revision/latest?cb=20161004034638")
		.setTitle("Metal Petal Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409> this turn."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Time to put the metal to the petal, baby!"`
							 })
		message.channel.send({embeds: [mps]})
	}
}