const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `blackhole`,
	aliases: [`bh`, `hole`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/60/GravityWellCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226141338")
			.setTitle("Black Hole | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Environment   -**")
			.addFields({name: "Stats", 
									value:"1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Plants here get -1<:Strength:1062501774612779039>. \n When a Plant is played, move it here." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Plants usually like being planted in holes. Black holes? Not so much.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}