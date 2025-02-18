const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `goingviral`,
	aliases: [`gv`, `viral`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/52/GoingViralCardImage.png/revision/latest?cb=20180922034311")
			.setTitle("Going Viral | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Trick  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "All Zombies get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n Shuffle three Going Viral cards into your deck." 
								 },
								 {
									name: "Set-Rarity", 
									 value: "**Event**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Though Zombies can't get ill, this plague is totally sick.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}