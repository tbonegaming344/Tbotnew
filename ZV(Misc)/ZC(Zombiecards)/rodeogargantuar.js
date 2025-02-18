const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `rodeogarg`,
	aliases: [`rodeo`, `rg`, `rodeogargantuar`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a3/RodeoGargantuarCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225182730")
		.setTitle("Rodeo Gargantuar | <:Hearty:1062501636557242429>")
		.setDescription("- **Sports Gargantuar Zombie ** -")
		.addFields({name: "Stats", 
								value: "5 <:Strength:1062501774612779039>, 9 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
							 {
								 name: "Trait", 
								 value: "__Gravestone__"
							 },
							 {
								 name: "Ability",  
								 value: "**When revealed**: Move a Plant. "
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "Why yes, this IS his first rodeo."
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}