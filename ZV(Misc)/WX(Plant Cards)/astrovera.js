const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `astrovera`,
	aliases: [`astro3`, `vera`, `av1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const av= new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4f/Astrovera_HD.png/revision/latest?cb=20170423042934")
		.setTitle("Astro Vera | <:Solar:1062502678384607262>")
		.setDescription("**\\- Cactus Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 8 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Increase your Hero's maximum <:Health:1062515540712751184> by 10. Heal your Hero for 10. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Your Hero will feel out of this world. And so will your skin."
							 })
		message.channel.send({embeds: [av]})
	}
}