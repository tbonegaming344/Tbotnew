const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `smokebomb`,
	aliases: [`smoke`, `bomb1`, `sb3`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/32/SmokeBombCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225221553")
			.setTitle("Smoke Bomb | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"
								 },
								 {
									name: "Ability",  
									 value: "Move a Zombie. It gets +1<:Strength:1062501774612779039>. " 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Basic - Common**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Good for eluding the enemy. Bad for the lungs.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}