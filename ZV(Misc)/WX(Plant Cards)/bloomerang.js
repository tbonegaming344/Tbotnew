const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bloomerang`,
	aliases: [`bloom`, `bloomer`, `boomerang`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let bl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6a/Plants-vs-Zombies-2-13.png/revision/latest/scale-to-width-down/1200?cb=20200407205412")
		.setTitle("Bloomerang | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strikethrough:1062502987425140806>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Magnets? Gravity? Crikey, I don't have a clue why they come back."`
							 })
		message.channel.send({embeds: [bl]})
	}
}