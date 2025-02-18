const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `gonuts`,
	aliases: [`go`, `gn`, `gnuts`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let go = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106223694889623652/Gonuts.webp")
		.setTitle("Go-Nuts | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Flower Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "When you play a __Team-Up__ Plant, all __Team-Up__ Plants get +1<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"GROW-Nuts! THROW-Nuts! When we get big we GO-Nuts! Goooooooo PLANTS!"`
							 })
		message.channel.send({embeds: [go]})
	}
}