const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `celestialcustodian`,
	aliases: [`cc6`, `jaintor`, `spacejanitor`, `mop`, `custodian`, `celestial`, `janitor`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/Space_Custodian.png/revision/latest/scale-to-width-down/250?cb=20180520031216")
			.setTitle("Celestial Custodian | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Mustache Zombie  -**")
			.addFields({name: "Stats", value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played in an Environment**: Destroy a Plant with 3<:Strength:1062501774612779039> or less."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Don't call him a "Space Janitor." He's a "Celestial Custodian" and darn proud of it.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}