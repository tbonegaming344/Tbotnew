const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `conezone`,
	aliases: [`cz4`, `bucketbay`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/46/Cone_Zone_HD.png/revision/latest?cb=20170612144325")
			.setTitle("Cone Zone | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Environment   -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Zombies here get +3<:Health:1062515540712751184>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `You are about to enter another dimension. A dimension not only of sight and sound, but of cones.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}