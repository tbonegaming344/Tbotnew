const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `headstonecarver`,
	aliases: [`headstone`, `carver`, `hc`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fd/HeadstoneCarverCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227153307")
			.setTitle("Headstone Carver | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Professional Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "When a Zombie is revealed from a __Gravestone__, that Zombie gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `His epitaphs have been published on headstones around the world. `
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}