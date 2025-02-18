const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `monstermash`,
	aliases: [`mm3`, `mash`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/62/HD_Monster_Mash.png/revision/latest?cb=20160607185328")
			.setTitle("Monster Mash | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Dancing Monster Trick -**")
			.addFields({name: "Stats", 
									value: "5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "All Zombies get +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombies never feel more alive than when they're dancing.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}