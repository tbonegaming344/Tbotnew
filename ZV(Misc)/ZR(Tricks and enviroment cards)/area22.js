const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `area22`,
	aliases: [`a22`, `Area`, `Area22`, `area`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/ZombossLabCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144459")
			.setTitle("Area 22 | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Science Environment  -**")
			.addFields({name: "Stats", value: "3 <:Brainz:1062503146745774183>"},
								 {name: "Ability",  value: "Zombies here get +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__."},
									{
										name: "Set-Rarity", value: "**Galactic - Super-Rare**"
									},
								 {
									name: "Flavor Text", value: `"Zombies from outer space? What an absurd conspiracy theory! Now move along. Nothing to see here." - Dr. Zomboss ` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}