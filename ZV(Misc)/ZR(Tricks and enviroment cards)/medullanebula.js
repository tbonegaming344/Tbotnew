const {EmbedBuilder} = require("discord.js")
module.exports = {
name: `medullanebula`,
aliases: [`nebula`,`medulla`, `mn`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a0/BrainSiloCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135709")
			.setTitle("Medulla Nebula | <:Brainy:1062500939908530246>")
			.setDescription("**\\-  Gourmet Environment  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When you play a Zombie here, you get +2<:Brainz:1062503146745774183> this turn."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombies often find brains in space. It's usually the space between your ears.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}