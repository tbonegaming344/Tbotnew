const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `shamrocket`,
	aliases: [`sham`, `shamerocket`, `shame`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const sham = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/24/HD-Shamrocket.png/revision/latest?cb=20170223121851")
		.setTitle("Shamrocket | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Leafy Pinecone Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie that has 4<:Strength:1062501774612779039> or more. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The bigger they are, the harder they go boom."
							 })
		message.channel.send({embeds: [sham]})
	}
}