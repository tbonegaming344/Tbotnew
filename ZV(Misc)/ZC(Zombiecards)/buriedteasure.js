const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `buriedteasure`,
	aliases: [`bt`, `buried`, `teasure`, `treasure`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c1/Buried_Treasure.png/revision/latest/scale-to-width-down/250?cb=20180209223836")
			.setTitle("Buried Treasure | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pirate Barrel Zombie  -**")
			.addFields({name: "Stats", value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**__Fusion__**: __Conjure__ a Legendary card, and it costs 1<:Brainz:1062503146745774183> less. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Neptuna knew only one way to motivate an army of invading zombie pirates. Tell them about the secret treasure."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}