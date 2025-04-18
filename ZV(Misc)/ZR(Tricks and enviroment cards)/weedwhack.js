const {EmbedBuilder}= require("discord.js")
module.exports= {
	name: `weedwhack`,
	aliases: [`weed1`, `whack`, `ww`, `weed`, `whackweed`],
	category: `Tricks Phase`,
	run: async(client,message, args)=> {
		const ww = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/44/WeedWhackCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225222647")
		.setTitle("Weed Whack | <:Solar:1062502678384607262>")
		.setDescription("**\\- Root Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Zombie gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Good for weeding out Zombies."
							 })
		message.channel.send({embeds: [ww]})
	}
}