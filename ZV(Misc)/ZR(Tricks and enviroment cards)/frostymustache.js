const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `frostymustache`,
	aliases: [`frosty`, `fm2`],
	category: `Tricks Phase`, 
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/78/Frosty21.png/revision/latest/scale-to-width-down/250?cb=20180330075842")
			.setTitle("Frosty Mustache | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Mustache Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "<:freeze:1323059404874055774>__Freeze__ a Plant. \n __Conjure__ a Mustache."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `So stylish! So cool!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}