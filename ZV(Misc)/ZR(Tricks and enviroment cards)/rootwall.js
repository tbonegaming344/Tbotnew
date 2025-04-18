const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `rootwall`, 
	aliases: [`root`, `wall1`, `rw1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const rw = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107659128358305802/RootWallCard.webp")
		.setTitle("Root Wall | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +2<:Health:1062515540712751184> and can't be hurt this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A good way to root for the Plants."
							 })
		message.channel.send({embeds: [rw]})
	}
}