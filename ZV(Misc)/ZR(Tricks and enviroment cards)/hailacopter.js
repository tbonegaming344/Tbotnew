const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `hailacopter`,
	aliases: [`helicopter`, `hac`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7c/HailaCopterCardImage.png/revision/latest?cb=20180921112021")
			.setTitle("Hail-a-Copter | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Imp Trick  -**")
			.addFields({name:"Stats", 
									value: "6 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "Make a 6<:Strength:1062501774612779039>/5<:Health:1062515540712751184> Copter Commando Imp. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Refuses to fly over water due to a severe case of aquaphobia.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}