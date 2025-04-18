const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `zapricot`,
	aliases: [`zap`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const zap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/45/HD_Zapricot.png/revision/latest?cb=20160429141945")
		.setTitle("Zapricot | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Some say that Zombie aren't easily shocked. I beg to differ."`
							 })
		message.channel.send({embeds: [zap]})
	}
}