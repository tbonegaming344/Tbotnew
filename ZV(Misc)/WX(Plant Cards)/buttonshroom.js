const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `buttonmushroom`,
	aliases: [`button`, `buttonshroom`, `bm`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let bm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/HD_Button_Mushroom.png/revision/latest?cb=20160607014803")
		.setTitle("Button Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Everyone's always telling her, "You're cute as a button!" But she's not just cute. She's smart and funny too.`
							 })
		message.channel.send({embeds: [bm]})
	}
}