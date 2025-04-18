const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cosmicnut`,
	aliases: [`cnut`, `cn`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/64/CosmicNutCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140231")
		.setTitle("Cosmic Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Nut, and its <:Strength:1062501774612779039> becomes 3<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A staunch believer in numerology, he'll go on at length about the significance of the number 3 if you const him."
							 })
		message.channel.send({embeds: [cn]})
	}
}