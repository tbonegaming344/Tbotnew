const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gargantuarsfeast`,
	aliases: [`gargfeast`, `feast`, `gf`, `gargantuars'feast`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/65/Gargantuars%27_FeastH.png/revision/latest?cb=20210607151837")
			.setTitle("Gargantuars' Feast | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Gargantuar Trick -**")
			.addFields({name: "Stats", 
									value: "11 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make 3 random Gargantuars in random Lanes. " 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Legendary**" 
								 },
								 {
									name: "Flavor Text", 
									value: `This party doesn't make reservations.` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}