const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `uncrackable`,
	aliases: [`uncrack`, `wksig`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let ws = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d0/UncrackableCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225114416")
		.setTitle("Uncrackable | <:Guardian:1062501130501885973><:Solar:1062502678384607262>")
		.setDescription("**\\- Nut Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "You Hero can't be hurt this turn. \nDraw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Wall-Knight laughs, "A thousand broken nutcrackers tell the story."`
							 })
		message.channel.send({embeds: [ws]})
	}
}