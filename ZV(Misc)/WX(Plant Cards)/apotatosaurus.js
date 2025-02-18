const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `apotatosaurus`,
	aliases: [`apotato`, `asurus`, `apo`, `bowlingcard`, `bowlingcard`, `bowlingbulbcard`, `bowlingbulbenjoyercard`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/Tater_titan.png/revision/latest/scale-to-width-down/250?cb=20170816155348")
		.setTitle("Apotatosaurus | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 5 <:Untrickable:1062501535126409277>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Untrickable:1062501535126409277>__Untrickable__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Root. \n **__Dino-Roar__:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Some potatoes are sweet. Others are dinosaurs."
							 })
		message.channel.send({embeds: [ap]})
	}
}