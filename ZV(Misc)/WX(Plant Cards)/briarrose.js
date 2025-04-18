const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `briarrose`,
	aliases: [`briar`, `br2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const br = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/95/BriarRoseCardImage.png/revision/latest/scale-to-width-down/250?cb=20170303220252")
		.setTitle("Briar Rose | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Zombie hurts a Flower, destroy that Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You mess with the rose, you get the thorns!"`
							 })
		message.channel.send({embeds: [br]})
	}
}