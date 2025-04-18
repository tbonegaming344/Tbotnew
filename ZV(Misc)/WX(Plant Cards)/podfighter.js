const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `podfighter`,
	aliases: [`pfighter`, `pod2`, `pf2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const pf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/55/PodFighterCardImage.png/revision/latest/scale-to-width-down/250?cb=20171013043546")
		.setTitle("Pod Fighter | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This does a Bonus Attack when you play a Plant here or next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They're just trying to create peas in our time."
							 })
		message.channel.send({embeds: [pf]})
	}
}