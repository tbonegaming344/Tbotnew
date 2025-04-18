const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `stompadon`,
	aliases: [`don`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/05/Stegorider.png/revision/latest/scale-to-width-down/250?cb=20170521171445")
			.setTitle("Stompadon | <:Hearty:1062501636557242429>")
			.setDescription("**\\- History Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "__**Dino-Roar**__: All Zombies in your hand get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									value: "**Colossal - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `With a cerebellum the size of a Wall-Nut, it specializes in oversized bodies for little brains.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}