const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `triplethreat`,
	aliases: [`triple`, `threat`, `ifsig`, `imps`, `clones1`, `ifclones`, `tt2`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/87/TripleThreatCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225130254")
			.setTitle("Triple Threat | <:Sneaky:1062502187781075094><:Crazy:1062502046474973224>")
			.setDescription("**\\-  Imp Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make two 2<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Impfinity Clones with __Amphibious__ in random lanes." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `That's how you get Imps.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}