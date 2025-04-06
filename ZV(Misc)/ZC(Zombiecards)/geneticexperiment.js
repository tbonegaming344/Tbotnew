const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `geneticexperiment`,
	aliases: [`ge`, `genetic`, `experiment`, `genexperiment`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1d/RegeneratingZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143000")
			.setTitle("Genetic Experiment | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Science Barrel Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									 value: "**Start of Tricks**: This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> if there's a Zombie next door. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Pickled Zombie is the best kind of Zombie."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}