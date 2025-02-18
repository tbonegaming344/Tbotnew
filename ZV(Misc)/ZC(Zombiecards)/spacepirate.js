const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `spacepirate`,
	aliases: [`sp9`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/be/SpacePirateCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143702")
			.setTitle("Space Pirate | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Pet Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:AntiHero:1062501067700568074>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "<:AntiHero:1062501067700568074>__Anti-Hero 2__" 
								 },
								 {
									 name: "Ability", 
									 value: "This moves to a random lane when a Plant is played here. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `At first he just dabbled in space piracy, but then he got hooked.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}