const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `chumchampion`,
	aliases: [`cc7`, `chum`, `champion`, `chumpion`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f3/Glamorous_Gladiator_card_face.png/revision/latest?cb=20170809200313")
			.setTitle("Chum Champion | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played**: All Plants get -1<:Strength:1062501774612779039>. \n __**Sports Evolution**__: Destroy all Plants with 2<:Strength:1062501774612779039> or less. "
								 },
								 {
									name: "Set-Rarity", 
									value: "**Triassic - Legendary**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `The Retiarius gladiator was classically armed with a trident, a net, and a 10-day-old fish.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}