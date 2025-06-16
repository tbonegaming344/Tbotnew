const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `mixednuts`,
	aliases: [`mixed`, `mn2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const mn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/87/HD_Mixed_Nuts.png/revision/latest?cb=20160502061054")
		.setTitle("Mixed Nuts | <:Solar:1062502678384607262>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> if there's a Plant with Team-Up here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They work hard but they also like to party. That's them in a nutshell."
							 })
		message.channel.send({embeds: [mn]})
	}
}