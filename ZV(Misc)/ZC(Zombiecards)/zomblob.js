const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zomblob`,
	aliases: [`blob`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e1/Zomblob.png/revision/latest/scale-to-width-down/250?cb=20180510074144")
			.setTitle("Zom-Blob | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Monster Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "__Zombie Evolution:__ This gets +1<:Strength:1062501774612779039> for each Brain you got this turn."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Colossal - Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `This is why you shouldn't drink primordial soup.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}