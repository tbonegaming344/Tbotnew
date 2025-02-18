const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cosmicyeti`,
	aliases: [`cy`, `thanosyeti`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f3/CosmicPetCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140320")
			.setTitle("Cosmic Yeti | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played**: __Conjure__ a Pet, and it gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									name: "Flavor Text",
									value: `He's hoping they name a constellation after him. "The Big Yeti" does have a ring to it. `
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}