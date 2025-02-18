const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `whirlwind`,
	aliases: [`whirl`, `wind`, `blow1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let ww = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107674795442708500/WhirlwindCardImage.webp")
		.setTitle("Whirlwind | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Bounce__ a random Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "There's no place like home. There's no place like home."
							 })
		message.channel.send({embeds: [ww]})
	}
}