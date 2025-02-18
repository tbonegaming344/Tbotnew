const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `escapethroughtime`,
	aliases: [`ett`, `escape`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9b/Escape_through_TimeH.png/revision/latest?cb=20180212104338")
			.setTitle("Escape Through Time | <:Hearty:1062501636557242429>")
			.setDescription("**\\- History Science Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie can't be hurt this turn. \n __Conjure__ a History card. " 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Galactic - Rare**" 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}