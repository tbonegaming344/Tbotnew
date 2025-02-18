const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombiechicken`,
	aliases: [`chicken`, `zc2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/ZombieChicken.png/revision/latest/scale-to-width-down/250?cb=20170830134029")
			.setTitle("Zombie Chicken | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "This moves to a random lane when a Plant is played here."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Question: Which came first, the Chicken or the egg? Answer: The Zombie!`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}