const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `piedpiper`,
	aliases: [`pied`, `piper`, `Pidepiper`, `Piper`, `Pide`, `rats`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ed/PiedPiperCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225135002")
			.setTitle("Pied Piper | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Dancing Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: Plants here get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "He was told that playing the pipe would summon raccoon. But whatevs."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}