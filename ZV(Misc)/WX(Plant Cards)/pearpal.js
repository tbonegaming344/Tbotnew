const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pearpal`,
	aliases: [`pal`, `pp9`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/04/PearPalPair.png/revision/latest/scale-to-width-down/250?cb=20180218135748")
		.setTitle("Pear Pal | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Has codependency issues, but he's working on it."
							 })
		message.channel.send({embeds: [pl]})
	}
}