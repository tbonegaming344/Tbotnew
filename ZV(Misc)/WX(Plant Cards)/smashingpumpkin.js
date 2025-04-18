const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `smashingpumpkin`,
	aliases: [`smashing2`,`pumpkun2`, `sp7`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/9/90/HD_Smashing_Pumpkin.png/revision/latest?cb=20200508150708")
		.setTitle("Smashing Pumpkin | <:Solar:1062502678384607262>")
		.setDescription("**\\- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sure, he and Squash are pals. But there's always an undercurrent of competition between them."
							 })
		message.channel.send({embeds: [sm]})
	}
}