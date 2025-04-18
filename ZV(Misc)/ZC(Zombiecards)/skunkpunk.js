const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `skunkpunk`,
	aliases: [`skunk`, `punk`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ac/SkunkPunkCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226110047")
			.setTitle("Skunk Punk | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Set-Rarity", 
									value: "**Basic - Common**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Smelly Zombie is the only Zombie who really gets him, you know?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}