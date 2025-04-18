const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `weedspray`,
	aliases: [`spray`, `ws2`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/64/Weed_Spray_HD.png/revision/latest/scale-to-width-down/250?cb=20200805062202")
			.setTitle("Weed Spray | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Trick -**")
			.addFields({name: "Stats", 
                  value: "3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "Destroy each Plant with 2<:Strength:1062501774612779039> or less."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Act now! Rids your lawn of pesky weeds... and Peashooters and Sunflowers. Also Wall-Nuts.
`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}