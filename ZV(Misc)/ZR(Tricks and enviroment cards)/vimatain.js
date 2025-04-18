const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `vitaminz`,
	aliases: [`Vitaminz`, `Vitamin`, `vitamin`, `vz`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/82/VitaminZCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225161700")
			.setTitle("Vitamin Z | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "A Zombie gets +3<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Side effects include headaches, blurred vision, and insatiable hunger.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}