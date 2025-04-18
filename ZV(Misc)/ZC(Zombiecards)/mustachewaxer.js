const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `mustachewaxer`,
	aliases: [`waxer`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5d/MustacheWaxerHD.png/revision/latest/scale-to-width-down/250?cb=20180204185254")
			.setTitle("Mustache Waxer | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Professional Mustache Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When you play a Mustache, this gets +2<:Health:1062515540712751184> and you get +1<:Brainz:1062503146745774183>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Customers have been telling him "Get a brain" for years now.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}