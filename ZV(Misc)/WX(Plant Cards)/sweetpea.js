const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sweetpea`,
	aliases: [`sweet2`, `sp4`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let sp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4e/Sweet_Pea_HD.png/revision/latest?cb=20170624185127")
		.setTitle("Sweet Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie to this lane."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies may only have four teeth left, but one of them's a sweet tooth."
							 })
		message.channel.send({embeds: [sp]})
	}
}