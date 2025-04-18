const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `backyardbounce`,
	aliases: [`byb`, `bb5`, `backyard`, `bounce`, `trampoline`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dc/BackyardBounceCardSpirte.png/revision/latest/scale-to-width-down/250?cb=20170225130414")
			.setTitle("Backyard Bounce | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Party Sports Trick  -**")
			.addFields({
									name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"
								},
								{
									name: "Ability",  
									value: "__Bounce__ a Plant."
								},
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombies love trampolines. Not everyone knows that.`
								 }
								)
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}