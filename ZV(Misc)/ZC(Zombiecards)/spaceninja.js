const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `spaceninja`,
	aliases: [`sn2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3a/SpaceNinjaCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143637")
			.setTitle("Space Ninja | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**While in an Environment**: The first time each turn this does damage, do 1 damage to each Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `You will never hear him coming in the vacuum of space.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}