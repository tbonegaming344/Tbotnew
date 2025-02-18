const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `catlady`,
	aliases: [`cat`, `lady`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2d/CatLadyCardImage.png/revision/latest/scale-to-width-down/250?cb=20170228171957")
			.setTitle("Cat Lady | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  value: "This gets +3<:Strength:1062501774612779039> this turn when you play a Pet."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Super-Rare**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `The cat on the left is a Z-Tube celebrity.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}