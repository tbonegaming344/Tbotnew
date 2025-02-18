const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cosmicscientist`,
	aliases: [`cos`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/41/CosmicScientistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140339")
			.setTitle("Cosmic Scientist | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",
									value: "<:Bullseye:1062501003313819678>__Bullseye__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played:** __Conjure__ a Science card, and it gets <:Bullseye:1062501003313819678>__Bullseye__."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Growing Plants in Space? Some of his fellow Zombies think he's crazy, but others appreciate the effort.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}