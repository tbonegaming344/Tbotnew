const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `danceoff`,
	aliases: [`do`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/Dance_OffH.png/revision/latest?cb=20161228000144")
			.setTitle("Dance Off | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Superpower Trick  -**")
			.addFields({name: "Stats",
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancers in a lne of your choice. Then another appears in a random lanes." 
								 },
								 {
									 name: "Set-Rarity",
									 value: "**Super-Rare**"
								 },
								 {
									name: "Flavor Text", 
									value: `You put your right foot in! No, wait, you might need that.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}