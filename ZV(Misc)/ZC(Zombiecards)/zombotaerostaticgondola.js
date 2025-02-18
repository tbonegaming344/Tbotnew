const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotaerostaticgondola`,
	aliases: [`aerostatic`, `gondola`, `aerostaticgondola`, `aristotle`, `goondala`, `zombot6`, `zag`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9f/GONDOLA.png/revision/latest/scale-to-width-down/250?cb=20170809191912")
			.setTitle("Zombot Aerostatic Gondola | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Science Pirate Zombie    -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__" 
								 },
								 {
									 name: "Ability",  
									 value: "When this hurts the Plant Hero, it moves to a random lane and leaves behind a random Zombie. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `These pirates hit hard, then escape at 3 miles per hour.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}