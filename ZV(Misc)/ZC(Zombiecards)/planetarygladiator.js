const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `planetarygladiator`,
	aliases: [`gladiator`, `gladdydaddy`, `pg`, `glad`, `gladdy`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b4/PlanetaryGuardCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226142808")
			.setTitle("Planetary Gladiator | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Sports Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Armored:1062502392005922919>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Armored:1062502392005922919>__Armored 1__" 
								 },
								 {
									 name: "Ability",  
									 value: "If your Hero would get hurt, this gets hurt instead."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's still not sure if he should defend Pluto or not.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}