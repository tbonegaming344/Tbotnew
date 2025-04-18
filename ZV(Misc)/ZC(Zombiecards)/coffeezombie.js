const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `coffeezombie`,
	aliases: [`coffee2`, `cz5`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/68/CoffeeZombieHD.png/revision/latest/scale-to-width-down/250?cb=20180204180621")
			.setTitle("Coffee Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Gourmet Mustache Zombie -**")
			.addFields({name: "Stats",
									value: "5 <:Frenzy:1062501819592491108>, 4 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played**: All Zombies get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Super-Rare**" 
								 },
								 {
									name: "Flavor Text", 
									value: `He's been trying to cut back.` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}