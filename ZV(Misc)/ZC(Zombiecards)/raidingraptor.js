const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `raidingraptor`,
	aliases: [`raiding`, `raptor`, `rr2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/Raptor_Rider_cardface.png/revision/latest/scale-to-width-down/250?cb=20170701155445")
			.setTitle("Raiding Raptor | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- History Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "__**Dino-Roar**__: This gets +2<:Strength:1062501774612779039>. \n When this hurts the Plant Hero, __Conjure__ a card that costs 2<:Brainz:1062503146745774183> or less."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Amazomb helmets mostly protect their ears from all the roaring.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}