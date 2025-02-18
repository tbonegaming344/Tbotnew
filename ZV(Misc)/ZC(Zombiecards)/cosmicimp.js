const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cosmicimp`,
	aliases: [`ci`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/24/Cosmic_ImpH.png/revision/latest?cb=20170611051911")
			.setTitle("Cosmic Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Deadly:1062501985795964928>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Deadly:1062501985795964928>__Deadly__" 
								 },
								 {
									name: "Ability",  
									value: "**When played:** __Conjure__ an Imp, and it gets <:Deadly:1062501985795964928>__Deadly__. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `When he gazes out at the stars, he feels small. Because he's an Imp.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}