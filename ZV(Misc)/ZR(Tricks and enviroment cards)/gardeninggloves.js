const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `gardeninggloves`,
	aliases: [`gloves`, `gardening`, `gg1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const gg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/64/GardeningGlovesCardImage.png/revision/latest?cb=20180205090332")
		.setTitle("Gardening Gloves | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Move a Plant. \n __Conjure__ a Trick. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Made of the softest fabric for that gentle Plant touch."
							 })
		message.channel.send({embeds: [gg]})
	}
}