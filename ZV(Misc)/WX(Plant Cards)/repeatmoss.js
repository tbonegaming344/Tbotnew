const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `repeatmoss`,
	aliases: [`repeat`, `moss`, `rm`, `rmoss`, `re-peatmoss`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let rm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/68/Re-PeatMoss.png/revision/latest/scale-to-width-down/250?cb=20170902104228")
		.setTitle("Repeat Moss | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Moss Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Trick, this does a Bonus Attack."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"To do what I do... it's TRICKY. I'll leave it at that."`
							 })
		message.channel.send({embeds: [rm]})
	}
}