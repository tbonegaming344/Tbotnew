const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `beammeup`,
	aliases: [`bmu`, `scotty`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/63/BeamMeUpCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225221935")
			.setTitle("Beam Me Up | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make a 2<:Strength:1062501774612779039>/3<:Health:1062515540712751184> Space Cadet Zombie." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Uncommon**" 
								 },
								 {
									name: "Flavor Text", 
									value: `A sure way to get a Space Cadet's attention.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}