const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `teammascot`,
	aliases: [`tm`, `mascot`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e1/HD_Team-Mascot.png/revision/latest?cb=20200831094253")
			.setTitle("Team Mascot | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Sports Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**Start of Turn**: All Sports Zombies get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Say what you will about the costume - Zombie morale has never been better.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}