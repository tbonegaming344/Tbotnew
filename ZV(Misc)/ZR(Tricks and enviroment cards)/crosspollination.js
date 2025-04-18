const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `crosspollination`,
	aliases: [`strike1`, `ss13`, `sunstrike`, `xpollination`, `xpoll`, `crosspoll`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const ss = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107453235092004934/sunstrike.webp?width=384&height=384")
		.setTitle("Cross-Pollination | <:Solar:1062502678384607262>")
		.setDescription("**\\- Fruit Flower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Conjure__ a Flower. __Conjure__ a Fruit. \n They both cost 1 less"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Each Plant is grown with the power of solar radiation. Sometimes you just have to const it out."
							 })
		message.channel.send({embeds: [ss]})
	}
}