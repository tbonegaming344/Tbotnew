const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cryobrain`,
	aliases: [`cb`],
	category: `Tricks Phase`, 
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8a/CryoBrainCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140501")
			.setTitle("Cryo-Brain | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Gourmet Science Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "You get +1<:Brainz:1062503146745774183> for the rest of the game." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Putting brains on ice is the best way to keep them fresh. Ask any Zombie.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}