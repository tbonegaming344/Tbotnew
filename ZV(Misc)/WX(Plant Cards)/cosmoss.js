const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cosmoss`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cos = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107113340502806629/CosmossTrue.webp")
		.setTitle("Cosmoss | <:Solar:1062502678384607262>")
		.setDescription("**\\- Moss Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When an Environment is played, this gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's Peel deGrass Lichen's biggest fan."
							 })
		message.channel.send({embeds: [cos]})
	}
}