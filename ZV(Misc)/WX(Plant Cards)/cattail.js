const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cattail`,
	aliases: [`cat`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cat = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/23/HD_Cattail_%28PvZH%29.png/revision/latest?cb=20160606102303")
		.setTitle("Cattail | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"My secret weapon? It's my cute little hat!"`
							 })
		message.channel.send({embeds: [cat]})
	}
}