const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `garlic`,
	aliases: [`vimpdestroyer`, `vimptech`, `vimpiredestroyer`, `vimpiretech`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const garlic = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cc/Garlic.png/revision/latest/scale-to-width-down/250?cb=20201226145126")
		.setTitle("Garlic | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Plant -**")
		.addFields({name: "Stats", 
							 value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "When a Zombie hurts this, move that Zombie to the left. If it's a Vimpire, destroy it."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Vimpires. They're the worst. I don't like to use the word 'hate' but yeah, I hate 'em."`
							 })
						.setColor("Random")
						
						message.channel.send({embeds: [garlic]})
	}
}