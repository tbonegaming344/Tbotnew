const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `plantern`,
	aliases: [`latern`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const late = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fb/PlanternPvZAS.png/revision/latest?cb=20140620094543")
		.setTitle("Plantern | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Tree Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in an Environment:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and <:Bullseye:1062501003313819678>__Bullseye__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Past job experience includes: Shooing away creepy fog."
							 })
		message.channel.send({embeds: [late]})
	}
}