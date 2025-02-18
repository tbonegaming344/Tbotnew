const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `goat`,
	aliases: [`greatestofalltime`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a0/GoatCardImage.png/revision/latest?cb=20180923071125")
			.setTitle("Goat | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Brainz:1062503146745774183>"},
								 {
								name: "Ability", 
								value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when any kind of Goat is hurt."	 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Triassic - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Hungry... Smelly... A lot like a Zombie but with 100% more goat.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}