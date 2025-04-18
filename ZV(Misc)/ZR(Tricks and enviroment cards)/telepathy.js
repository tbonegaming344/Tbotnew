const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `telepathy`,
	aliases: [`telepath`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/99/TelepathyCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226204500")
			.setTitle("Telepathy | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Draw two cards."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `You're thinking of a number between 1 and braaaaains.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}