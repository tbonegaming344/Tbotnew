const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `birdofparadise`, 
	aliases: [`bird`, `birb`, `paradise`, `bop`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const bop = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e6/Cheesebirder_in_paradise.png/revision/latest/scale-to-width-down/250?cb=20170816201939")
		.setTitle("Bird of Paradise | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Flower Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
								value: "4 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** __Conjure__ a Superpower."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Her beautiful melodies are echoed by the roars of dinosaurs."
							 })
		message.channel.send({embeds: [bop]})
	}
}