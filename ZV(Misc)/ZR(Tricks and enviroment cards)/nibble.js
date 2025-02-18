const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `nibble`,
	aliases: [`nibb`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/NibbleCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301171659")
			.setTitle("Nibble | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Plant gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>.\n if this destorys a plant __Conjure__ a Gourmet card." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Just a quick bite.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}