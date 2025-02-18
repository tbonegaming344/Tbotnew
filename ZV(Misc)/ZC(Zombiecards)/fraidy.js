const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `fraidycat`,
	aliases: [`fraidy`,],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2c/Fraidy-cat-HD.png/revision/latest/scale-to-width-down/250?cb=20170827013854")
			.setTitle("Fraidy Cat | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When a Plant Trick is played, this gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and moves to a random lane."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Event**" 
								 },
								 {
									name: "Flavor Text", 
									value: `What's a black cat's favorite color? Purrrrr-ple.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}