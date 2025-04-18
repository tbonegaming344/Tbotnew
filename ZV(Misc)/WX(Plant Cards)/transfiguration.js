const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `transfiguration`,
	aliases: [`fig`, `transfig`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const fig = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a6/FIG_BOIII.png/revision/latest/scale-to-width-down/250?cb=20201007103550")
		.setTitle("Transfiguration | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Leafy Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "4 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "End of turn: This transforms into a random plant that costs 1 more. \n it keeps this ability."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"By Heisenberg's Uncertainty Principle, if you look at a Plant too closely, you actually change what that Plant is..."`
							 })
		message.channel.send({embeds: [fig]})
	}
}