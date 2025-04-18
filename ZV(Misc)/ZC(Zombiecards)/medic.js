const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `medic`,
	aliases: [`med`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/22/MedicHD.png/revision/latest/scale-to-width-down/250?cb=20180413115016")
			.setTitle("Medic | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played**: Heal 4. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's hard keeping Zombies on their feet. It's harder keeping feet on the Zombies.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}