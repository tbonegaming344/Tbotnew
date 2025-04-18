const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `camelcrossing`,
	aliases: [`camel`, `crossing`, `camelcross`, `animalcrossing`, `cc5`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9b/CamelCrossingCardImage.png/revision/latest/scale-to-width-down/250?cb=20170228173054")
			.setTitle("Camel Crossing | <:Hearty:1062501636557242429>")
			.setDescription("**\\- History Pet Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"
								 },
								 {
									name: "Ability",  
									value: "All Zombies get +2<:Health:1062515540712751184>." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Camels - they're filthy, ill-tempered animals that'll spit on you just for fun. But Zombies love 'em all the same.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}