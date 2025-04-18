const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `killerwhale`,
	aliases: [`whale`, `killer`, `Killerwhale`, `Killer`, `Whale`, `orca`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/48/KillerWhale.png/revision/latest/scale-to-width-down/250?cb=20180213104922")
			.setTitle("Killer Whale | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", 
									 value: "__Amphibious__"
								 },
								 {
									name: "Ability",  
									value: "__Fusion__: A Zombie played on this gets +2<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and __Amphibious__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Flooding Hollow Earth with water from above, Neptuna attacked with flying whale cavalry. Or really, falling whale cavalry."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
}
}