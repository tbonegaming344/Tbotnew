const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombiecoach`,
	aliases: [`zc1`, `coach`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/49/Zombie_Coach_HD.png/revision/latest?cb=20161012011302")
			.setTitle("Zombie Coach | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Mustache Sports Zombie  -**")
			.addFields({name: "Stats", 
                  value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "**When played**: All Sports Zombies can't be hurt this turn."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `There's no "i" in Zombee!`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}