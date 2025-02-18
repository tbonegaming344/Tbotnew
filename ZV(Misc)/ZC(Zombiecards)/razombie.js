const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `razombie`,
	aliases: [`ra`, `rz2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/55/Ra_Zombie_HD.png/revision/latest?cb=20161012010546")
			.setTitle("Ra Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- History Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played**: The Plant Hero loses 2<:Sun:1062501177679413409> this turn. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Some nights sundown comes early...`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}