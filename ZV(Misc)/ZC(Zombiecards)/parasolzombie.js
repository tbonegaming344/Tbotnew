const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `parasolzombie`,
	aliases: [`parasol`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f6/Parasol_Zombie_Cardface.png/revision/latest?cb=20170701060011")
			.setTitle("Parasol Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Party Zombie -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 6 <:Untrickable:1062501535126409277>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Untrickable:1062501535126409277>__Untrickable__" 
								 },
								 {
									 name: "Ability",  
									 value: "Zombies next door are <:Untrickable:1062501535126409277>__Untrickable__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Her favorite author is Brain Austen.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}