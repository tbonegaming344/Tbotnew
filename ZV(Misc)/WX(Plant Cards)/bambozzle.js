const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bamboozle`,
	aliases: [`bamboo`, `bam`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const bam = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a9/Bamboozle_HD.png/revision/latest?cb=20170227030606")
		.setTitle("Bamboozle | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** Draw two cards. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Only among the hyper-evolved Plants of Hollow Earth can you be outwitted by a tree."
							 })
		message.channel.send({embeds: [bam]})
	}
}