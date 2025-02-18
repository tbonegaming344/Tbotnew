const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `vanilla`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let v = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/31/1598834321656.png/revision/latest/scale-to-width-down/250?cb=20200831003941")
		.setTitle("Vanilla | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm sorry, it's just... I have nothing interesting to say."`
							 })
		message.channel.send({embeds: [v]})
	}
}