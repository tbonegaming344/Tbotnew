const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bungeeplumber`,
	aliases: [`bungee`, `plumber`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/69/BungeePlumberCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226201715")
			.setTitle("Bungee Plumber | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Professional Mustache Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"
								 },
								 {
									name: "Ability",  
									value: "Do 2 damage." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Likes: Plumbing and adventure sports. Dislikes: Belts.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}