const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `peapod`, 
	aliases: [`pod1`, `pp5`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const pp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c2/Pea_Pod%28Halloween%29.png/revision/latest/scale-to-width-down/250?cb=20131230014347")
		.setTitle("Pea Pod | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes they squabble, but they usually get along like five peas in a pod."
							 })
		message.channel.send({embeds: [pp]})
	}
}