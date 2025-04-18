const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `typicalbeanstalk`,
	aliases: [`typical`, `beanstalk2`, `tb2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const tb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/de/Typical_Beanstalk_card_face.png/revision/latest?cb=20170830152900")
		.setTitle("Typical Beanstalk | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played next to a Leafy Plant:** This gets +1 <:Health:1062515540712751184> __Conjure__ a Leafy card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Everyone's magical in their own special way. Everyone except me."`
							 })
		message.channel.send({embeds: [tb]})
	}
}