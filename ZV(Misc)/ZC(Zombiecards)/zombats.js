const {EmbedBuilder} = require("discord.js");
module.exports =  {
 name: `zombats`,
	aliases: [`bats`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/Zom-Bats_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20161026140138")
			.setTitle("Zom-Bats | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Amphibious__"
                 },
                 {
                   name: "Ability", 
                   value: "When this hurts a Plant, draw a card."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Token**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Like chihuahuas with wings... and fangs... and a taste for Plants.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}