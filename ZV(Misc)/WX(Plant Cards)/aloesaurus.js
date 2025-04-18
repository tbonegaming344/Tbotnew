const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `aloesaurus`,
	aliases: [`aloe`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const aloe = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fe/Aloesaurus.png/revision/latest/scale-to-width-down/250?cb=20170824144955")
		.setTitle("Aloesaurus | <:Solar:1062502678384607262>")
		.setDescription("**\\- Cactus Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Dino-Roar:** Heal all Plants and the Plant Hero for 1. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A roaring force of life. A crushing force of destruction."
							 })
		message.channel.send({embeds: [aloe]})
	}
}