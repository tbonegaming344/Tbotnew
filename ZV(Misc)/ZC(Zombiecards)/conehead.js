const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `conehead`,
	aliases: [`cone`, `ch`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/12/ConeheadH.png/revision/latest?cb=20161229021644")
			.setTitle("Conehead | <:Hearty:1062501636557242429>")
			.setDescription("**\\-  Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Armored:1062502392005922919>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Armored:1062502392005922919>Armored 1" 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Basic - Common**" 
								 },
								 {
									name: "Flavor Text", 
									value: `Almost went out with a lampshade on his head. Thought better of it.` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}