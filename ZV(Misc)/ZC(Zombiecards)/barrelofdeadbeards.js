const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `barrelofdeadbeards`,
	aliases: [`bod`, `barrel`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/65/Barrel_of_DeadbeardsH.png/revision/latest?cb=20160528114717")
			.setTitle("Barrel of Deadbeards | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Pirate Barrel Zombie -**")
			.addFields({name: "Stats", value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  value: "**When destroyed**: Do 1 damage to all Plants and Zombies, then make a 4<:Strength:1062501774612779039>/3<:Health:1062515540712751184> Captain Deadbeard here. " 
								 },
								 {
									name: "Set-Rarity", value: "**Premium - Legendary**" 
								 },
								 {
									 name: "Flavor Text", value: `No monkeys, just Zombies.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}