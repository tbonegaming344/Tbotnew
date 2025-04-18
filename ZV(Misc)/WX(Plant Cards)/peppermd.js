const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `peppermd`,
	aliases: [`pepper`, `pmd`],
	category: `Plant Cards`, 
	run: async(client, message, args)=> {
		const pmd = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9c/HD_Pepper_M.D..png/revision/latest?cb=20160502034855")
		.setTitle("Pepper M.D. | <:Solar:1062502678384607262>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> when a Plant or your Hero is healed. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"A toast to your health... and mine!"`
							 })
		message.channel.send({embeds: [pmd]})
	}
}