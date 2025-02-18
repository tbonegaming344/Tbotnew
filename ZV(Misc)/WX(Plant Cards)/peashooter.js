const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `peashooter`,
	aliases: [`pea`, `regularpea`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/1/1a/HD_Peashooter_28PvZH.png/revision/latest?cb=20201115221207&path-prefix=protagonist")
		.setTitle("Peashooter | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Started fighting Zombies in 2009... and never stopped."
							 })
		message.channel.send({embeds: [pea]})
	}
}