const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `shelfmushroom`,
	aliases: [`shelf`, `shelfshrooms`, `sm2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let sm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7e/ShelfMushroomHD.png/revision/latest/scale-to-width-down/250?cb=20180217213710")
		.setTitle("Shelf Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** Do 2 damage."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Legends of Hollow Earth whisper that if you stack up enough Shelf Mushrooms, you'll eventually reach the Surface World."
							 })
		message.channel.send({embeds: [sm]})
	}
}