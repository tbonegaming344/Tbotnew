const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `possessed`, 
	aliases: [`frenzy`, `possess`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0d/PossessedCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225213354")
			.setTitle("Possessed | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. " 
								 },
								 {
									name: "Flavor Text", 
									 value: `There's nothing like a good possession to perk a Zombie up.` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}