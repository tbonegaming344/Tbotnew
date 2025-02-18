const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `doubledmint`,
	aliases: [`dobuled`, `mint`, `dm1`, `doublemint`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let dm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/28/DoubledMint.png/revision/latest/scale-to-width-down/250?cb=20170902104215")
		.setTitle("Doubled Mint | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Double this Plant's <:Strength:1062501774612779039> and <:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He'll grow on you. Just give him time."
							 })
		message.channel.send({embeds: [dm]})
	}
}