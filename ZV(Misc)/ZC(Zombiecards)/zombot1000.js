const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombot1000`,
	aliases: [`zombot`, `1000zombot`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
    .setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/6/63/Zombot_1000.png/revision/latest?cb=20190407121915")
		.setTitle("Zombot 1000 | <:Beastly:1062500894744264714>")
		.setDescription("**\\- Science Gargantuar Zombie -**")
		.addFields({name: "Stats", 
                value: "9 <:Strength:1062501774612779039>, 9 <:Health:1062515540712751184>, 9 <:Brainz:1062503146745774183>"
               },
               {
                  name: "Traits", 
                  value: "__Gravestone__"
               },
               {
                 name: "Ability", 
                 value: "**When revealed**: Destroy all Plants here and next door"
               },
               {
                 name: "Set-Rarity", 
                 value: "**Premium - Legendary**"
               },
               {
                 name: "Flavor Text", 
                 value: "The first 999 Zombots are now considered classics."
               })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}