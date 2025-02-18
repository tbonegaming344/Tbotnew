const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `trickster`,
	aliases: [`ster`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/99/TricksterHD2.png/revision/latest/scale-to-width-down/250?cb=20170524083128")
			.setTitle("Trickster | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 10 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**While in your hand:** This costs 1<:Brainz:1062503146745774183> less when you play a Trick. \n **When played:** This does a Bonus Attack." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Never gets tired of the the rubber chicken gag.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}