const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pairpearadise`,
	aliases: [`pearadise`, `pairadise`, `pp4`,`pairpeardise`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const pp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dd/PairPearadiseCardFace.png/revision/latest?cb=20220508044622")
		.setTitle("Pair Pearadise | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant here, make a copy of that Plant with __Team-Up__ here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Peter Piper's Planet precociously picked a pair of pickled peppered pairs."
							 })
		message.channel.send({embeds: [pp]})
	}
}