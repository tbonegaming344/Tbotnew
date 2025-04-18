const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `chillypepper`,
	aliases: [`chilly`, `cp4`, `cpepper`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cp = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106217265822707854/HD_Chilly_Pepper.webp")
		.setTitle("Chilly Pepper | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** <:freeze:1323059404874055774>__Freeze__ a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It's not easy being both hot *and* cold. A comfortable lukewarm might be nice for a change."`
							 })
		message.channel.send({embeds: [cp]})
		}
}