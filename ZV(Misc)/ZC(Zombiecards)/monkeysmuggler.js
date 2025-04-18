const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `monkeysmuggler`,
	aliases: [`ms4`, `monkey`, `smuggler`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c2/Monkey_Smuggler.png/revision/latest/scale-to-width-down/250?cb=20200919153229")
			.setTitle("Monkey Smuggler | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pirate Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: 
										 "**When revealed:** Steal 1 sections from the Plant Hero's Super-Block Meter."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Piracy is serious monkey business.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}