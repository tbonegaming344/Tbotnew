const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `flagzombie`,
	aliases: [`flag`, `fz2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1087499597330530444/94-948838_flag-zombie-plants-vs-zombies-removebg-preview.png")
			.setTitle("Flag Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Zombies cost 1<:Brainz:1062503146745774183> less. "
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's not patriotic; he just likes fabric suspended from sticks.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}