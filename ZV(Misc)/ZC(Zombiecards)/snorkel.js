const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `snorkelzombie`,
	aliases: [`snorkel`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/15/SnorkelZombieCardIcon.png/revision/latest/scale-to-width-down/250?cb=20170228165857")
			.setTitle("Snorkel Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "__Amphibious__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Breathing out: check. Breathing in? Not so much.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}