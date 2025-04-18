const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `surprisegarg`,
	aliases: [`surprisegargantuar`, `surprise`, `sg5`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/71/SurpriseGargantuarCardImage.png/revision/latest/scale-to-width-down/250?cb=20170302175655")
			.setTitle("Surprise Gargantuar | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Party Gargantuar Zombie    -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed:** Move this Zombie."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Surprise! It's a brains-eating monster at your party!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}