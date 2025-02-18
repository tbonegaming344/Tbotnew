const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `armwrestler`,
	aliases: [`arm`, `wrestler`, `aw`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/34/Arm_WrestlerH.png/revision/latest/scale-to-width-down/225?cb=20160625173956")
		.setTitle("Arm Wrestler | <:Hearty:1062501636557242429>")
		.setDescription("- **Sports Zombie** -")	
		.addFields({name: "Stats", value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
							 {
								name: "Ability",  value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when a Plant enters this lane." 
							 }, 
							 {
								name: "Set-Rarity", value: "**Premium - Uncommon**"
							 },
							 {
								name: "Flavor Text", value: "Lots of carbs, lots of protein, and five brain shakes a day."
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
		}
}