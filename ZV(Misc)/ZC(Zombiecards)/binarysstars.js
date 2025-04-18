const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `binarystars`,
	aliases: [`binary`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/BinaryStars.png/revision/latest/scale-to-width-down/250?cb=20180209224013")
			.setTitle("Binary Stars | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "All your cards do double damage."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's a Gemini and so is she. Which explains so much, right?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}