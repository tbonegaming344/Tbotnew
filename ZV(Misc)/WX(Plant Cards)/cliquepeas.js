const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cliquepeas`,
	aliases: [`clique`, `cp1`, `cpeas`, `cliquepea`],
	category: `Plant Cards`, 
	run: async(client, message, args)=> {
		const cp = new EmbedBuilder()
		.setThumbnail("https://pbs.twimg.com/media/DFwAtCsU0AE4INR.png")
		.setTitle("Clique Peas | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Bean Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Shuffle two Clique Peas into your deck. For the rest of the game, all Clique Peas get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and cost +1<:Sun:1062501177679413409>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "On Wednesdays we wear sunglasses."
							 })
		message.channel.send({embeds: [cp]})
	}
}