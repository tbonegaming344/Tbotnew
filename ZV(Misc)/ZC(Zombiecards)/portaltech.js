const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `portaltechnician`,
	aliases: [`portal`, `portaltech`, `tech`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e0/HDDD.png/revision/latest/scale-to-width-down/250?cb=20170107111400")
			.setTitle("Portal Technician | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache Science Zombie   -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name:"Ability",  
									value: "**When destroyed:** Make a random Zombie here. "	 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Soon everyone will own their own portal. But for now, he enjoys being an early adopter.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}