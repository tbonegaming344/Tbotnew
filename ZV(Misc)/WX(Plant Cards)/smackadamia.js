const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `smackadamia`,
	aliases: [`smack`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let smack = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/79/HD_Smackadamia.png/revision/latest?cb=20160429142535")
		.setTitle("Smackadamia | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** Your Nuts get +2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Smackadamia wasn't born with smack smarts. He studied hard. He's a smackademic."
							 })
		message.channel.send({embeds: [smack]})
	}
}