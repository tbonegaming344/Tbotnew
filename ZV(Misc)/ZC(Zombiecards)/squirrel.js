const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `squirrelherder`,
	aliases: [`SquirrelHerder`, `Squirrelherder`, `Squirrel`, `squirrel`, `Herder`, `herder`, `nutsorberries`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/18/Squirrel_Herder_HD.png/revision/latest/scale-to-width-down/250?cb=20161012010733")
			.setTitle("Squirrel Herder | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: Destroy one of their Nuts or Berries."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "The only thing more difficult than herding cats."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}