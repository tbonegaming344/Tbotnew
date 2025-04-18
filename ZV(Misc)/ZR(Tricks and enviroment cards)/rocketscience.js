const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `rocketscience`,
	aliases: [`rocketsci`, `rocket`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cc/RocketScienceCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227185504")
			.setTitle("Rocket Science | <:Brainy:1062500939908530246>")
			.setDescription("**\\-  Science Barrel Trick  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Destroy a Plant that has 4<:Strength:1062501774612779039> or more."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Turns out, it IS rocket science.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}