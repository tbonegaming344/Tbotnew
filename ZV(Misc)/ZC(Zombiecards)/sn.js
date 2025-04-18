const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `sneezingzombie`,
	aliases: [`sneezing`, `sneze`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125478796846452850/sneeze.webp?width=657&height=588")
			.setTitle("Sneezing Zombie | <:Beastly:1062500894744264714>")
					.setDescription("**\\- Party Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Plants and the Plant Hero can't be healed. \n **When played**: All Plants get-1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Flowers give her awful allergies and sickening sneezes. Is that why she wears one on her head?"
								 })
			.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
}
}