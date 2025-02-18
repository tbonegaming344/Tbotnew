const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `imp`,
	aliases: [`regularimp`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/03/VectorUmp.png/revision/latest/scale-to-width-down/2399?cb=20180113093831")
			.setTitle("Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Imp Zombie   -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's proficient in Zombie judo and Zombie karate. He also plays the Melodica.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}