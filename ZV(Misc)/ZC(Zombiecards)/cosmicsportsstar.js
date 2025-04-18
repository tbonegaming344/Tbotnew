const {EmbedBuilder} = require("discord.js")
module.exports ={
	name: `cosmicsportsstar`,
	aliases: [`css`, `sportsstar`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5a/CosmicSportsStarCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140408")
			.setTitle("Cosmic Sports Star | <:Hearty:1062501636557242429>")
			.setDescription("**\\-Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played**: __Conjure__ a Sports card, and it costs 2<:Brainz:1062503146745774183> less. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's been named Most Valuable Zombie of the Galaxy two years in a row!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}