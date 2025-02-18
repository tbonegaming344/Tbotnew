const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `transmogrify`,
	aliases: [`mog`, `transmog`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let tm = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107673651257557002/TransmogrifyCardImage.webp")
		.setTitle("Transmogrify | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's a life-changing experience. Actually, it's an everything-changing experience."
							 })
		message.channel.send({embeds: [tm]})
	}
}