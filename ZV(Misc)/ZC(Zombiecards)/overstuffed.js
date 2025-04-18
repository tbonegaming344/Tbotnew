const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `overstuffedzombie`,
	aliases: [`overstuffed`, `stuffedzombie`, `bigchungus`, `caseoh`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/Fat-Obi.png/revision/latest/scale-to-width-down/250?cb=20220116164347")
			.setTitle("Overstuffed Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Gourmet Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
									{
										name: "Traits", 
										value: "__Hunt__"
									},
								 {
									 name: "Ability",  
									 value: "When this destroys a Plant and surives, \n it heals to full and heals your hero for 2"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "His cholesterol level is off the charts, and yet he seems to be in remarkably good Health. "
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}