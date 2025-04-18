const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `primordialcheeseshover`,
	aliases: [`pcs`, `cheeseshover`, `primordcheese`, `shover`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125145336042762331/PrimordialCheeseShover.webp")
		.setTitle("Primordial Cheese Shover | <:Beastly:1062500894744264714>")
		.setDescription("- **Gourmet History Zombie** -")	
		.addFields({name: "Stats", 
								value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
							 {
								name: "Ability",  
								value: "__Zombie Evolution__: Destroy a Plant." 
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "He's wheely cheesy."
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
		}
}