const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombologyteacher`,
	aliases: [`zt`, `teacher`, `zombology`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/79/ZombologyTeacherHD.png/revision/latest/scale-to-width-down/250?cb=20180208024845")
			.setTitle("Zombology Teacher| <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Zombies Tricks cost 1<:Brainz:1062503146745774183> less. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `"If you don't pay attention in class, you'll never improve your brains..."`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}