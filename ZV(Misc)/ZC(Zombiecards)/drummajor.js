const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `drummajor`,
	aliases: [`drum`, `major`, `drumminor`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c3/HDrumm_Ajor.png/revision/latest/scale-to-width-down/250?cb=20170729231012")
			.setTitle("Drum Major | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Dancing Sports Zombie  -**")
			.addFields({name: "Stats", value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									name: "Flavor Text", 
									value: `Recently promoted from Drum Minor.` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}