const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cherrybomb`,
	aliases: [`cherry`, `bomb3`, `cb1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let cb = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1094727365042634902/png-transparent-plants-vs-zombies-2-it-s-about-time-cherry-bomb-bomb-cartoon-thumbnail-removebg-preview.png")
		.setTitle("Cherry Bomb | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 4 damage to each Zombie here and next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Explode? Detonate? ... Explodonate!"`
							 })
		message.channel.send({embeds: [cb]})
	}
}