const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `fumeshroom`,
	aliases: [`fume`, `fs`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const fs = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107357801153568931/HD_Fume-Shroom.webp")
		.setTitle("Fume-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm like the wind. Near a hog farm."`
							 })
		message.channel.send({embeds: [fs]})
	}
}