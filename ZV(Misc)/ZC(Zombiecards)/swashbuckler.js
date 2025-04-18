const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `swashbucklerzombie`,
	aliases: [`swash`, `buckler`, `swashbuckler`, `main`, `mainpirate`, `sz3`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/23/SwashbucklerZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227162819")
			.setTitle("Swashbuckler Zombie | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									 name: "Ability",  
									 value: "When a Pirate hurts the Plant Hero, that Pirate gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Buckles his swash like no other.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}