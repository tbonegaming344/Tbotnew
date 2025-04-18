const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `spineapple`,
	aliases: [`spine`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const spi = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/be/Spineapple_HD.png/revision/latest?cb=20190118035009")
		.setTitle("Spineapple | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Plants with no Strength get +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't const his gruff exterior fool you. He's always looking out for the little guy."
							 })
		message.channel.send({embeds: [spi]})
	}
}