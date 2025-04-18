const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `intergalacticwarlord`,
	aliases: [`iw`, `warlord`, `intergalactic`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cf/WarlordInHD.png/revision/latest/scale-to-width-down/250?cb=20180523052017")
			.setTitle("Intergalactic Warlord | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Mustache Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played**: For the rest of the game, all Zombies get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `In space Zombie circles, he's a very powerful figure. Just don't talk about him in front of Huge-Gigantacus. There's some jealousy there.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}