const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotsharktronicsub`,
	aliases: [`shark`, `sharktronicsub`, `sharktronic`, `sub`, `zombot7`, `zss`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/66/HDSHARK.png/revision/latest?cb=20170128135827")
			.setTitle("Zombot Sharktronic Sub | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Science Pet Zombie   -**")
			.addFields({name: "Stats", 
                  value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Amphibious__"
                 },
                 {
                   name: "Ability", 
                   value: "When a Plant gets hurt, destroy it. When any Plant is destroyed, this gets +1<:Strength:1062501774612779039>. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Legendary**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Ever dream of piloting a giant shark robot? Join Dr. Zomboss now!`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}