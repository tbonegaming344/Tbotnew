const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `congazombie`,
	aliases: [`conga`, `cz2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/CongaZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170228171015")
			.setTitle("Conga Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Gourmet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: Do 1 damage. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Important Note: The fruit on her hat is made of plastic.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}