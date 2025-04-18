const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `icepirate`,
	aliases: [`ip`, `ice`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e1/IcePirateCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226141645")
			.setTitle("Ice Pirate | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed in an Environment:** <:freeze:1323059404874055774>__Freeze__ a Plant. "
								 },
								 {
									name: "Set-Rarity", 
									value: "**Galactic - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `You wouldn't believe how many brains a chunk of space ice foes for on the black market. Let's just say, she's rolling in gray matter.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}