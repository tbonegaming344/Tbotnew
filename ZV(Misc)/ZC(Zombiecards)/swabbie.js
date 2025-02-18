const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `swabbie`,
	aliases: [`swab`, `tbonecard`, `tbone1`, `tbonegamingcard`, `tbonegaming344card`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b7/SwabbieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226113847")
			.setTitle("Swabbie | <:Sneaky:1062502187781075094>")
					.setDescription("**\\- Imp Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "__Amphibious__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "When he's not fighting Plants, you'll find him swabbing the Zombot Plank Walker's poop deck."
								 })
			.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
		}
}