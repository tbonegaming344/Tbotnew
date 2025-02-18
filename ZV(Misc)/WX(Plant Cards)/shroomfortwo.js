const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `shroomfortwo`,
	aliases: [`s42`, `sf2`, `sft`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let sft = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/49/Shroom_for_TwoH.png/revision/latest/scale-to-width-down/225?cb=20160321142439")
		.setTitle("Shroom for Two | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Puff-Shroom with __Team-Up__ here"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Shrooms, bless their hearts, always wanting to cuddle up cuddly-like."
							 })
		message.channel.send({embeds: [sft]})
	}
}