const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `interdimensionalzombie`,
	aliases: [`idz`, `interdimensional`, `overallbetter`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/75/Interdimensional_Zombie.png/revision/latest/scale-to-width-down/250?cb=20180209094903")
			.setTitle("Interdimensional Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When you play a Science card, this transforms into a random Zombie that costs 3<:Brainz:1062503146745774183>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `In a parallel dimension, this Zombie is a Space Pirate. In another he's a Trash Can Zombie. Turns out, little choices in life can make a big difference.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}