const {EmbedBuilder} = require("discord.js")
module.exports ={
	name: `octopult`,
	aliases: [`ntsig`, `op1`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2f/OctoPultCardImage.png/revision/latest/scale-to-width-down/250?cb=20170303220440")
			.setTitle("Octo-Pult | <:Hearty:1062501636557242429><:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pet Superpower Trick -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make a 3<:Strength:1062501774612779039>/2<:Health:1062515540712751184> Octo-Pet with __Amphibious__, __Frenzy__." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Octopus incoming! Two words a Plant never wants to hear.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}