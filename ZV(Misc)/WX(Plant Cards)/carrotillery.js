const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `carrotillery`,
	aliases: [`carrot2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const c = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ec/Carrotillery_vectorized.png/revision/latest/scale-to-width-down/250?cb=20180120102128")
		.setTitle("Carrotillery | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "His artillery is a rich source of vitamin A and beta-carotene - a fact the Zombies do not seem to appreciate."
							 })
		message.channel.send({embeds: [c]})
	}
}