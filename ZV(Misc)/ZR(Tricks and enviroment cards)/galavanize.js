const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `galvanize`,
	aliases: [`galv`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1f/GalvanizeCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225133640")
			.setTitle("Galvanize | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets  +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `To protect and serve.... brains.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}