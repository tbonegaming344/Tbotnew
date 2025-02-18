const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `stealthyimp`,
	aliases: [`stealthy`, `si`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/50/StealthyImpCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225124837")
			.setTitle("Stealthy Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pirate Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:AntiHero:1062501067700568074>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__, <:AntiHero:1062501067700568074>__Anti-Hero 4__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Don't look, but there's one behind you right now! `
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}