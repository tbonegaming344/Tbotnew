const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `extinctionevent`,
	aliases: [`extinction`, `ee`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e0/Extinction_Event.png/revision/latest?cb=20171031020147")
			.setTitle("Extinction Event | <:Beastly:1062500894744264714>")
			.setDescription("**\\- History Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Plant gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. All others copies of that Plant also get -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>." 
								 }, 
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Super-Rare**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Sometimes the evolutionary tree withers at the root`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}