const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `screendoorzombie`,
	aliases: [`sdz`, `screendoor`, `screen`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/be/ScreendoorHD2.png/revision/latest/scale-to-width-down/250?cb=20180116103433")
			.setTitle("Screen Door Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__"	 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: This can't be hurt this turn. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Little known fact: He carries a door to protect himself from solar radiation.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}