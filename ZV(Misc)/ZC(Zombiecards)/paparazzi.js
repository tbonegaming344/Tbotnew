const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `paparazzizombie`,
	aliases: [`paparazzi`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7d/Paparazzi.png/revision/latest/scale-to-width-down/250?cb=20180505173330")
			.setTitle("Paparazzi Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Professional Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									value: "This gets +1<:Strength:1062501774612779039>/+1 <:Health:1062515540712751184> when you play a Trick." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Why is everyone always screaming and running away in his photos?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}