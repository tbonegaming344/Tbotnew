const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `dolphinrider`,
	aliases: [`Dolphin`, `dolphin`, `Dolphinrider`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0a/DolphinRider.png/revision/latest/scale-to-width-down/250?cb=20180213105007")
			.setTitle("Dolphin Rider | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "__Amphibious__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The dolphin is also a Zombie.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}