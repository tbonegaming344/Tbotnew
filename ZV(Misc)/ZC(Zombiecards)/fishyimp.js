const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `fishyimp`,
	aliases:[`fishy`, `fi`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/41/By_Bluzacy.png/revision/latest/scale-to-width-down/250?cb=20200725172906")
			.setTitle("Fishy Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Imp Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
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
									 value: `Throws the best pool parties.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}