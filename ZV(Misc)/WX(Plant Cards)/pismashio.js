const {EmbedBuilder}= require("discord.js")
module.exports= {
	name: `pismashio`,
	aliases: [`pismash`, `pis`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pis = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/74/PismashioCardImage.png/revision/latest?cb=20170924175510")
		.setTitle("Pismashio | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm a kind of ice cream! Sort of!"`
							 })
		message.channel.send({embeds: [pis]})
	}
}