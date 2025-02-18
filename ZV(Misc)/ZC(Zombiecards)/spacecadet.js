const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `spacecadet`,
	aliases: [`sc1`, `cadet`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b7/SpaceCadet.png/revision/latest/scale-to-width-down/250?cb=20180417151130")
			.setTitle("Space Cadet | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Set-Rarity", 
									value: "**Token**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `His body is in space, but his head is in the clouds.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}