const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotstomp`,
	aliases: [`stomp`, `whatarethose`, `whatarethooooose`, `feet`, `zombot8`, `zs`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/20/ZombotStompCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226101300")
			.setTitle("Zombot Stomp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Science Gargantuar Trick  -**")
			.addFields({name: "Stats", 
									value: "6 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "__Bounce__ all Plants on the Ground. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value:"**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Don't make him put his foot down!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}