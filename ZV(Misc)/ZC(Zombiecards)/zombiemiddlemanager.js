const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombiemiddlemanager`,
	aliases: [`zmm`, `middlemanager`, `middle`, `manager`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b4/MiddleManager.png/revision/latest/scale-to-width-down/250?cb=20180114134008")
			.setTitle("Zombie Middle Manager | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "This gets +1<:Strength:1062501774612779039> when another Professional gets hurt. \n **When played**: __Conjure__ a Professional. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Colossal - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Like most managers, bringing pain to his employees gives him strength.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}