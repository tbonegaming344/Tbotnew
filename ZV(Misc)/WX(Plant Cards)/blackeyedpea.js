const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `blackeyedpea`, 
	aliases: [`bep`, `blackeyed`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const bep = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2d/HD_Black-Eyed_Pea.png/revision/latest?cb=20160630003911")
		.setTitle("Black-Eyed Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Bean Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when a Zombie Trick is played."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You shoulda seen the other guy!"`
							 })
		message.channel.send({embeds: [bep]})
	}
}