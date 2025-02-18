const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `seedling`,
	aliases: [`seed`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let seed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/5/58/HD_Seedling.png/revision/latest?cb=20170421135619")
		.setTitle("Seedling | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This transforms into a random Plant that costs 6<:Sun:1062501177679413409> or less."
							 },
							 {
								 name:"Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's the tiny seed of a... nobody actually knows."
							 })
		message.channel.send({embeds: [seed]})
	}
}