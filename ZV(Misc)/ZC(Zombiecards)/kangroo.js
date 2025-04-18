const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `kangaroorider`,
	aliases: [`kangaroo`, `kr`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fd/Kangaroo_Rider_HD.png/revision/latest?cb=20161012004842")
			.setTitle("Kangaroo Rider | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Imp Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When hurt**: __Bounce__ this Kangaroo." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Sure, it's a bumpy ride, but it beats walking. Have you seen an Imp's legs?"
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}