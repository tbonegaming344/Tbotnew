const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sappyplace`,
	aliases: [`sappy`, `place`, `sp6`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const sap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7d/Sappy_Place_card_face.png/revision/latest?cb=20180216052701")
		.setTitle("Sappy Place | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Zombies here get -3 <:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies just hate a sappy ending."
							 })
		message.channel.send({embeds: [sap]})
	}
}