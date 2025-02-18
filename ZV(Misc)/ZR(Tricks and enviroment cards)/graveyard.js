const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `graveyard`,
	aliases: [`yard`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/18/GraveyardCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226141256")
			.setTitle("Graveyard | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Environment   -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Zombies played here are Gravestones. When a Zombie is revealed from a __Gravestone__ here, it gets +1<:Strength:1062501774612779039>. "
								 },
								 {
									name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Super Brainz always wanted a house with a nice yard.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}