const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sagesage`,
	aliases: [`sage`, `ss9`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ss = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/HD_Sage_Sage.png/revision/latest?cb=20160429141436")
		.setTitle("Sage Sage | <:Solar:1062502678384607262>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** If you made at least 6<:Sun:1062501177679413409> this turn, draw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Got his start writing messages for fortune cookies."
							 })
		message.channel.send({embeds: [ss]})
	}
}