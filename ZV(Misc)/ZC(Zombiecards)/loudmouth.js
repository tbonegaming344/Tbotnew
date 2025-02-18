const {EmbedBuilder} = require("discord.js")
module.exports = {
	name:`loudmouth`, 
	aliases: [`lm`, `Loudmouth`, `Lm`, `LM`, `loud`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125143221362757742/loudmouth.webp")
			.setTitle("Loudmouth | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Dancing Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: A Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `What he lacks in size, he makes up for in volume.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}