const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `mimegarg`,
	aliases: [`gargmime`, `mimegargantuar`, `gargantuarmime`, `mime`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/MimeGargHD.png/revision/latest/scale-to-width-down/250?cb=20171128184309")
			.setTitle("Gargantuar Mime | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Gargantuar Mime Zombie  -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "When a non-Mime Plant or Zombie does a Bonus Attack, this does a Bonus Attack. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The Gargantuar Mime groans like any other zombie. He just does it silently and in French.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}