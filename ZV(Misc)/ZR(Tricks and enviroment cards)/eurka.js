const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `eurka`,
	aliases: [`mustachesuper`, `pbsig`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/64/EurekaCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226165247")
			.setTitle("Eureka | <:Brainy:1062500939908530246><:Crazy:1062502046474973224>")
			.setDescription("**\\- Mustache Science Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "__Conjure__ any three cards. "
								 },
								 {
									 name: "Flavor Text", 
									 value: `Professor Brainstorm's ideas are brilliant... totally random, but brilliant.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}