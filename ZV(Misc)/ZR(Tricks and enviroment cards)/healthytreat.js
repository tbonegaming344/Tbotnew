const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `healthytreat`,
	aliases: [`hearty`, `healthy`, `ht`, `heartytreat`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8e/Healthhh.png/revision/latest/scale-to-width-down/250?cb=20170107053505")
			.setTitle("Healthy Treat | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Gourmet Trick -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +1<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Great for Zombie Health. Like a vitamin only sweeter.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}