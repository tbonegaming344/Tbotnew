const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bigchill`,
	aliases: [`chill`, `bc1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let bc = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107671902283104296/BigChillCardImage.webp")
		.setTitle("Big Chill | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "<:freeze:1323059404874055774>__Freeze__ a Zombie. \nDraw a card."
							 },
							 {
								name: "Set-Rarity",
								value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Discerning Plants agree: Zombies are best served on ice."
							 })
		message.channel.send({embeds: [bc]})
	}
}