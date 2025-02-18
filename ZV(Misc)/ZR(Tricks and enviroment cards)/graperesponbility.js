const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `graperesponsibility`,
	aliases: [`gr1`, `grape1`, `responsibility`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const gr = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4d/Grape_Responsibility_cardface.png/revision/latest?cb=20171014120033")
		.setTitle("Grape Responsibility | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Berry Trick -**")
		.addFields({name: "Stats",
							 value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Double a Plant's <:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When you think of responsibility, think of grapes."
							 })
			.setColor("Random")
			
			message.channel.send({embeds: [gr]})
	}
}