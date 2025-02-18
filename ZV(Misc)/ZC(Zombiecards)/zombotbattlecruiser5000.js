const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotbattlecruiser5000`,
	aliases: [`zbc`, `battlecruiser`, `cruiser`, `barrelboi`, `zb3`, `zombot5`, `zb5`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9e/ZombotBattlecruiser.png/revision/latest/scale-to-width-down/250?cb=20180209223917")
			.setTitle("Zombot Battlecruiser 5000 | <:Hearty:1062501636557242429>")
			.setDescription("**\\-  Science Barrel Zombie -**")
			.addFields({name: "Stats", 
                  value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Gravestone__"
                 },
                 {
                   name: "Ability", 
                   value: "When revealed: Zombies can't be hurt this turn. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Galactic - Legendary**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Not space legal in 35 different galaxies.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}