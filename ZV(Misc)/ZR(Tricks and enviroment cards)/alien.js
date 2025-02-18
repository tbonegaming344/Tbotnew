const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `alienooze`,
	aliases: [`alien`, `ooze`, `ao`, `Alienooze`, `Alien`, `Ooze`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/AlienOozeCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135133")
			.setTitle("Alien Ooze | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Monster Trick  -**")
			.addFields({name: "Stats", value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  value: "A Plant here gets -3<:Strength:1062501774612779039>/-3<:Health:1062515540712751184>. \n If it's on heights or an Environment, it gets -6<:Strength:1062501774612779039>/-6<:Health:1062515540712751184> instead. "
								 },
								 {
									 name: "Set-Rarity", value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", value: `Oozin' for a bruisin'!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}