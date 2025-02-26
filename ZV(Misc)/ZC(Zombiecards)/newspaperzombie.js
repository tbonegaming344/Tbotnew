const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `newspaperzombie`,
	aliases: [`news`, `newspaper`, `nz`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/Newspaper_ZombieH.png/revision/latest?cb=20170422001224")
			.setTitle("Newspaper Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When hurt**: This gets +4<:Strength:1062501774612779039>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Newspapers are an undead medium.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}