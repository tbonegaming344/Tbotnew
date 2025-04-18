const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `landscaper`,
	aliases: [`scaper`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9a/HD_Landscaper_with_hole_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210526164547")
			.setTitle("Landscaper | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									name: "Ability",  
									value: "**When revealed**: A Plant gets -2<:Strength:1062501774612779039>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `If barren rock and wilted Plants are what you want, he's the landscaper for the job.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}