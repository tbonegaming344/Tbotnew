const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sourgrapes`,
	aliases: [`sour`, `grapes1`, `sg1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sg = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/d/de/HD_Sour_Grapes.png/revision/latest?cb=20170427080626")
		.setTitle("Sour Grapes | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 1 damage to each Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sour. Bitter. Resentful. It's all true. But he's got his reasons."
							 })
		message.channel.send({embeds: [sg]})
	}
}