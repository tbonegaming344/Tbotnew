const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `superstench`,
	aliases: [`deadly`, `stench`, `ss2`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9b/SuperStenchCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226210024")
			.setTitle("Super Stench | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "All Zombies get <:Deadly:1062501985795964928>__Deadly__. \nDraw a card"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `That's the smell of victory!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}