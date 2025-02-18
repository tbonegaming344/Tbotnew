const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `moonwalker`,
	aliases: [`mw`, `moon`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/92/MoonWalk.png/revision/latest/scale-to-width-down/250?cb=20180502114833")
			.setTitle("Moonwalker | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Dancing Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "**When played on Heights or an Environment:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `That's one small nibble for Zombies, one giant bite for Zombiekind.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}