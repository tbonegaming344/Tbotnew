const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `photosynthesizer`,
	aliases: [`photo`, `photosynthesize`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let photo = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/PhotosynthesizerHD.png/revision/latest/scale-to-width-down/250?cb=20171128203234")
		.setTitle("Photosynthesizer | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Trick -**")
		.addFields({name: "Stats", 
							 value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +2<:Health:1062515540712751184>. \n __Conjure__ a Galactic Gardens card. "
							 },
							 {
								name: "Set-Rarity",
								value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The galaxy is one beautiful melody, so play!"
							 })
			.setColor("Random")
			
			message.channel.send({embeds: [photo]})
	}
}