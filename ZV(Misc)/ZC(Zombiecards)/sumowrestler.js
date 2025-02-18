const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `sumowrestler`,
	aliases: [`sumo`, `sw2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5d/HD_Sumo_Wrestler_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210202173807")
			.setTitle("Sumo Wrestler | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: Move a Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Hey, he's in shape. Round is a shape.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}