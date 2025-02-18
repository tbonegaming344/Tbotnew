const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pineclone`,
	aliases: [`pineclones`, `pclones`, `pclone`, `clones2`, `clone2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8c/PinecloneHD.png/revision/latest/scale-to-width-down/250?cb=20180204225416")
		.setTitle("Pineclone | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Pinecone Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Transform all Plants into 3<:Strength:1062501774612779039>/3<:Health:1062515540712751184> Pineclones. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's nothing personal. She just prefers the company of other Pineclones."
							 })
		message.channel.send({embeds: [pc]})
	}
}