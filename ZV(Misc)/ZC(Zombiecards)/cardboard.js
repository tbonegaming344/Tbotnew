const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cardboardrobotzombie`,
	aliases: [`cardbot`, `cardboard`, `cardboardrobot`, `cardboardzombie`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/CarboardRobotZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226125917")
			.setTitle("Cardboard Robot Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's Rustbolt's biggest fan.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}