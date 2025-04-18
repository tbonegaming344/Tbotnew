const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `leftovers`,
	aliases: [`lo`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6e/LeftoversCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226113102")
			.setTitle("Leftovers | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Gourmet Pet Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "All Zombies get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombies love them almost as much as brains.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}