const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bflat`,
	aliases: [`flatb`, `piano`, `csharp`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b7/BflatCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225185027")
			.setTitle("B-flat | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Dancing Trick  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Destroy a random Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Just wait until you C-Sharp.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}