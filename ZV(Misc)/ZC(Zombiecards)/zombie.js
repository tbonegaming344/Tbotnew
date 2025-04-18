const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombie`, 
	aliases: [`browncoat`, `regular`, `regularzombie`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5b/ZombieH.png/revision/latest/scale-to-width-down/225?cb=20161231011028")
			.setTitle("Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Token**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Owns a closet full of brown coats. And one plaid coat.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}