const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `teleport`,
	aliases: [`tp`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/Teleport_HD.png/revision/latest?cb=20181016041010")
			.setTitle("Teleport | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "You may play a Zombie when it's time for Tricks this turn. \n Draw a card." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Feels like cheating.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}