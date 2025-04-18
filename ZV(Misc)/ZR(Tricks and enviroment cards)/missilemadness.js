const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `missilemadness`,
	aliases: [`mm1`, `zmsig`, `missle`, `madness`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()	
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/15/MissileMadnessCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301210051")
				.setTitle("Missile Madness | <:Hearty:1062501636557242429><:Crazy:1062502046474973224>")
			.setDescription("**\\-  Science Imp Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Do 3 damage to a Plant and 1 damage to all other Plants. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `For Z-Mech, any target is a good target.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}