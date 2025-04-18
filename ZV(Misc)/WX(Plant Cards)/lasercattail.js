const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lasercattail`,
	aliases: [`laser`, `lasercat`, `lc3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const lc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b9/LaserCattailCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226142031")
		.setTitle("Laser Cattail | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when you play a Plant here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's really good at entertaining himself."
							 })
		message.channel.send({embeds: [lc]})
	}
}