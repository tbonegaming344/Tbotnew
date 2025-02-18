const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `rockwall`,
	aliases: [`rock`, `wall2`, `rw2`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/10/powers-rockwall.png.adapt.crop16x9.png")
			.setTitle("Rock Wall | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +5<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Better than a wall of scissors, but worse than a wall of paper.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}