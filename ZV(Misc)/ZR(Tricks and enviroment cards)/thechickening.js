const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `thechickening`,
	aliases: [`chickening`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/64/TheChickeningCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301202006")
			.setTitle("The Chickening | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Pet Trick -**")
			.addFields({name: "Stats", 
									value: "4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Do 2 damage to each Plant. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `So. Many. Feathers.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}