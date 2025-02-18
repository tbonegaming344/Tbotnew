const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `wallnut`,
	aliases: [`walnut`, `nut`, `wn1`, `lgcard`,`lgtyqzcard`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let nut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/HD_Wall-nut.png/revision/latest?cb=20220414061652")
		.setTitle("Wall-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Works well with others. Says so, right there on his resume."
							 })
		message.channel.send({embeds: [nut]})
	}
}