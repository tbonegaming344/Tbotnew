const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gargologist`,
	aliases: [`gargolog`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7d/GargologistHD.png/revision/latest/scale-to-width-down/250?cb=20180118203809")
			.setTitle("Gargologist | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Science Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Gargantuars cost 2<:Brainz:1062503146745774183> less. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `After years of studying Gargantuars in the wild, she's dedicated herself to telling the world they're just misunderstood gentle giants. So far, nobody's buying it. `
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}