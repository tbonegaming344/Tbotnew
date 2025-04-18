const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `trashcanzombie`,
	aliases: [`tcz`, `trash`, `trashcan`, `trash-canzombie`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/84/PvZH_Trash_Can_Zombie_HD.png/revision/latest?cb=20161012010357")
			.setTitle("Trash Can Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Barrel Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: This can't be hurt this turn. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's dark and quiet in there. He finds it soothing. That's what no one gets.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}