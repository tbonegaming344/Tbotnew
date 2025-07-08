const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `juggernut`,
	aliases: [`jugger`, `jn`, `Jugger-Nut`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const jugger = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/53/JuggerNutCardImage.png/revision/latest?cb=20180206041950")
		.setTitle("Jugger-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Bullseye:1062501003313819678>, 3 <:Armored:1062502392005922919>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "<:Armored:1062502392005922919>__Armored 1__, <:Bullseye:1062501003313819678>__Bullseye__, __TeamUp__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "What's a better than a Wall-Nut? A Wall-Nut in a suit of armor, that's what."
							 })
		message.channel.send({embeds: [jugger]})
	}
}