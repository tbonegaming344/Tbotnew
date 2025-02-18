const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `shrinkray`,
	aliases: [`nerf`, `shrink`, `ray`, `rbsig`, `sr`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a2/ShrinkRayCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225221222")
			.setTitle("Shrink Ray | <:Brainy:1062500939908530246><:Hearty:1062501636557242429>")
			.setDescription("**\\- Science Superpower Trick -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Plant gets -3<:Strength:1062501774612779039>. \n Draw a card." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Rustbolt gets a kick out of belittling Plants.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}