const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `captaindeadbeard`,
	aliases: [`dead`, `deadbeard`, `beard`, `cd1`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/88/CaptainDeadbeard.png/revision/latest?cb=20170830110033")
			.setTitle("Captain Deadbeard | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Mustache Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Set-Rarity", 
									value: "**Token**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Yo ho ho! It's a pirate's unlife for him!`
								 }
							)
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}