const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `rollingstone`,
	aliases: [`rs`, `rolling`, `stone`, `trollingstone`, `trolling`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fc/RollingStonePvZH.png/revision/latest/scale-to-width-down/250?cb=20171128184834")
			.setTitle("Rolling Stone | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Destroy a Plant with 2<:Strength:1062501774612779039> or less. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Gives new meaning to the phrase "rock n' roll".`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}