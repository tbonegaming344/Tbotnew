const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `dolphinado`,
	aliases: [`blow2`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/30/DolphinadoCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226194723")
			.setTitle("Dolphinado | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pet Superpower Trick   -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability", 
									 value: "__Bounce__ a random Plant. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Weather report calls for afternoon tornados with a 75% chance of sea mammals.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}