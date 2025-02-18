const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `duckytubezombie`,
	aliases: [`dtz`, `ducky`, `tube`, `duckytube`, `zombieducky`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/25/DuckyTubeZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140722")
			.setTitle("Ducky Tube Zombie | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Party Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"}
								,{
								name: "Trait", 
								value: "__Amphibious__"	
								},
								 {
									name: "Ability",  
									value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when it hurts the Plant Hero." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Zombie Ducky, joy of joys. When it squeezes, you make noise!"
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}