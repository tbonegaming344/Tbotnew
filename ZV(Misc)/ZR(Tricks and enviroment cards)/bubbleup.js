const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bubbleup`,
	aliases: [`bubble`, `bu`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const bu = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b2/BubbleUpCardImage.png/revision/latest/scale-to-width-down/250?cb=20180206062206")
		.setTitle("Bubble Up | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Move a Plant. It gets +4<:Health:1062515540712751184> and __Teamup__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
									value: "Who doesn't like bubbles? Zombies ... that's who."
							 })
		message.channel.send({embeds: [bu]})
	}
}