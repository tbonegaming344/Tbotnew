const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `knockout`,
	aliases: [`flick`, `ko`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b8/FlickaPlantCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227193643")
			.setTitle("Knockout | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Trick  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Choose a lane. Destroy all Plants there with 3<:Strength:1062501774612779039> or less.  " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `No one knows where the giant green hand and the giant purple hand come from. What will happen when they clap?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}