const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `octozombie`,
	aliases: [`octo`, `zombieocto`, `octopussy`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125478161103196251/octo.webp")
		.setTitle("Octo Zombie | <:Beastly:1062500894744264714>")
		.setDescription("**\\- Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "8<:Frenzy:1062501819592491108>, 8 <:Health:1062515540712751184>"},
								 {
									name: "Traits", 
									 value: "__Amphibious__, <:Frenzy:1062501819592491108>__Frenzy__" 
								 },
								 {
									 name: "Ability", 
									 value: "**When Played:** Make a +3<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> with Amphibious and Frenzy \n **When destroyed**: Gain an Octo Zombie"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Is the correct term 'octopuses' or 'octopi'? \n You'd think he'd have an opinion, but he doesn't."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}