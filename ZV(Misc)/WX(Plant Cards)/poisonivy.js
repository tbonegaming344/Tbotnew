const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `poisonivy`,
	aliases: [`poison2`, `ivy`, `pi`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pi = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/02/PoisonIvy.png/revision/latest/scale-to-width-down/250?cb=20170901023545")
		.setTitle("Poison Ivy | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Leafy Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:AntiHero:1062501067700568074>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Anti-Hero 4__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Guess who's itching for a fight? This guy right here!"`
							 })
		message.channel.send({embeds: [pi]})
	}
}