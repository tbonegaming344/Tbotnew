const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `terrify`,
	aliases: [`terr`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9f/TerrifyPvZH.png/revision/latest/scale-to-width-down/250?cb=20170830134404")
			.setTitle("Terrify | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Move a Plant. \n __Conjure__ a Monster. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Just a disembodied Zombie head screaming uncontrollably. Nope. Nothing terrifying about that.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}