const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `coptercommando`,
	aliases: [`copter`, `commando`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d9/CopterCommandoCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227185815")
			.setTitle("Copter Commando | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "6 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Refuses to fly over water due to a severe case of aquaphobia.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}