const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `secretagent`,
	aliases: [`sa`, `secret`, `agent`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/71/SecretAgentHD_CardImage.png/revision/latest?cb=20170403165035")
			.setTitle("Secret Agent | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Professional Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "__Bounce__ a Zombie, and it gets +3<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He likes his brains shaken, not stirred.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}