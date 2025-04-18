const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `dr.spacetime`,
	aliases: [`drspacetime`, `spacetime`, `drwho`, `space`, `ds2`, `st2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9f/Dr._SpacetimeH.png/revision/latest?cb=20170620060335")
			.setTitle("Dr. Spacetime | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- History Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Cards you __Conjure__ cost 1<:Brainz:1062503146745774183> less. When this hurts the Plant Hero, __Conjure__ a Galactic Gardens card. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He insists it's more than just a screwdriver. Much more.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}