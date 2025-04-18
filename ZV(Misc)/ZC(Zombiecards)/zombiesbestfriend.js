const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombiesbestfriend`,
	aliases: [`zbf`, `bestfriend`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2f/ZombiesBestFriend.png/revision/latest?cb=20180210123914")
			.setTitle("Zombie's Best Friend | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "When played next to a Zombie: Make another random Zombie that costs 1<:Brainz:1062503146745774183>. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Triassic - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `"What counts is not necessarily the size of the dog in the fight; it's the size of the fight in the dog." - Wight Z. Diesenhower`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}