const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `morningglory`,
	aliases: [`morning`, `glory`, `mg2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let mg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d3/HD_Morning_Glory%282%29.png/revision/latest?cb=20161021055433")
	.setTitle("Morning Glory | <:Solar:1062502678384607262>")
	.setDescription("**\\- Flower Plant -**")
	.setColor("Random")
	
	.addFields({name: "Stats",
						 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
						 {
							 name: "Ability",
							 value: "**When played:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> if you made at least 6<:Sun:1062501177679413409> this turn."
						 },
						 {
							 name: "Set-Rarity",
							 value: "**Premium - Uncommon**"
						 },
						 {
							 name: "Flavor Text",
							 value: "Just don't talk to her before she's had her Coffee Bean."
						 })
		message.channel.send({embeds: [mg]})
	}
}