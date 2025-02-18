const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotdroneengineer`,
	aliases: [`drone`, `droneengineer`, `zde`, `engineer`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b2/HD_Zombot_Drone_Engineer_by_Flag_Zombie.png/revision/latest?cb=20210110220602")
			.setTitle("Zombot Drone Engineer | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache Science Zombie  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Gravestone__"
                 },
                 {
                   name: "Ability", 
                   value: "When a Science Zombie does damage, that Zombie gets +1<:Strength:1062501774612779039>. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: "He's not entirely sure how to fly this thing."
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}