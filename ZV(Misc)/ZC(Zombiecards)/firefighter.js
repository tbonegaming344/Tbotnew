const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `firefighter`,
	aliases: [`fire1`, `fighter`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ed/Firefighter_HD.png/revision/latest?cb=20161012004558")
			.setTitle("Firefighter | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed:** __Bounce__ another Zombie. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's a little too eager to rescue kittens from trees.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}