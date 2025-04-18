const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `maniacallaugh`,
	aliases: [`maniacal`, `ml`, `ManiacalLaugh`, `Maniacallaugh`, `ML`, `manicallaugh`, `laugh`, `mwahahaha`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c9/ManiacalLaughHD.png/revision/latest/scale-to-width-down/250?cb=20170419204237")
			.setTitle("Maniacal Laugh | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Trick -**")
			.addFields({name: "Stats", 
									value: "6 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "A Zombie gets +5<:Strength:1062501774612779039>/+5<:Health:1062515540712751184> and \n <:Frenzy:1062501819592491108>__Frenzy__."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's not so much "hahaha" as it is "mwahahaha."`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}