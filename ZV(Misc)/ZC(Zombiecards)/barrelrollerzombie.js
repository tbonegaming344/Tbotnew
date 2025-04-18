const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `barrelrollerzombie`,
	aliases: [`barrelroller`, `roller`, `brz`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/21/Barrel_Roller_ZombieH.png/revision/latest?cb=20170110130644")
			.setTitle("Barrel Roller Zombie | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pirate Barrel Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Deadly:1062501985795964928>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "<:Deadly:1062501985795964928>__Deadly__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When destroyed:** Make 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Swabbie Imps with __Amphibious__ next door."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The second-most affordable way to transport Imps.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}