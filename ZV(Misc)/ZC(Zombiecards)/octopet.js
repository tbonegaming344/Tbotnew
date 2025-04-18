const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `octopet`,
	aliases: [`op2`, `octopus`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e8/OctoPetCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226204208")
			.setTitle("Octo-Pet | <:Hearty:1062501636557242429><:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pet Zombie   -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait",  
									 value: "__Amphibious__"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Token**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's slimy, beady-eyed, and it leaves ink splotches wherever it goes. Neptuna loves it all the same.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}