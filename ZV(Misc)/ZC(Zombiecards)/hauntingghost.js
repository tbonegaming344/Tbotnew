const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `hauntingghost`,
	aliases: [`ghost`, `deadghost`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/04/HD_Haunting_Ghost_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20221022222105")
			.setTitle("Haunting Ghost | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Monster Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
                 }, 
                 {
                   name: "Trait", 
                   value: "__Amphibious__"
                 }, 
                 {
                   name: "Ability",  
                   value: "**When played**: A Plant gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
                 }, 
                 {
                   name: "Set-Rarity", 
                   value: "**Colossal - Uncommon**"
                 }, 
                 {
                   name: "Flavor Text", 
                   value: `HIs he a Zombie? Is he a ghost? He refuses to be pigeonholed.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}