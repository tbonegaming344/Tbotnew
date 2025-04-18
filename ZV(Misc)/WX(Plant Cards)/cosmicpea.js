const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cosmicpea`,
	aliases: [`cp3`, `cpea`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cp = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bf/CosmicPeaCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140258")
		.setTitle("Cosmic Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:DoubleStrike:1062501703494160394>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Pea, and it gets <:DoubleStrike:1062501703494160394>__Double Strike__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"The cosmos is so big and a pea is so small. The juxtaposition just really makes me think, you know?"`
							 })
		message.channel.send({embeds: [cp]})
	}
}