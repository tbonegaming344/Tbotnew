const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `hovergoat3000`,
	aliases: [`hovergoat`, `hog`, `Hovergoat`, `Hovergoat3000`, `hover`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125142122148941824/HD_Hover-Goat_3000.webp")
			.setTitle("Hover-Goat 3000 | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Science Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played**: Another Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> \n **When hurt**: __Bounce__ this Goat."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The future is Hovering. The future is Radical. The future is Goat.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}