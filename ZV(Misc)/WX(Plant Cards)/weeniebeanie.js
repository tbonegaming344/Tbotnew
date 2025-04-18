const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `weeniebeanie`,
	aliases: [`weenie`, `beanie`, `wb2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const wb= new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6f/HD_Weenie_Beanie.png/revision/latest?cb=20160606171414")
		.setTitle("Weenie Beanie | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Prefers to be called "Vertically Challenged Beanie."`
							 })
		message.channel.send({embeds: [wb]})
	}
}