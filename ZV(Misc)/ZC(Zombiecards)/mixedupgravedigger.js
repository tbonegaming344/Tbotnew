const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `mixedupgravedigger`,
	aliases: [`mug`, `mixed`, `mixedup`, `gravedigger`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e9/Mixedupgravedigger.png/revision/latest/scale-to-width-down/250?cb=20170614072858")
			.setTitle("Mixed-Up Gravedigger | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Professional Mustache Zombie    -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played:** Each Zombie hides in a __Gravestone__. Mix them up randomly." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Legendary**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Digging graves is hard work, but seeing customers rise out of them makes it all worth it.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}