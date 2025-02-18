const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gasgiant`,
	aliases: [`gg2`, `gas`, `giant`, `fart`, `fartgarg`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/65/GasGiant.png/revision/latest/scale-to-width-down/250?cb=20180330173833")
			.setTitle("Gas Giant | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gargantuar Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability", 
									 value: "**When hurt:** Do 1 damage to each other Plant and Zombie. \n **When destroyed:** Do 5 damage to the Plant Hero. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `There isn't a fart joke he hasn't heard.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}