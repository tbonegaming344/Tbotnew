const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `galactacactus`,
	aliases: [`galacta`, `gaca`, `gc`],
	category: `Plant Cards`,
	run: async(client,message,args)=> {
		const gaca = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b8/Galacta-Cactus_HD.png/revision/latest?cb=20170702052305")
		.setTitle("Galacta-Cactus | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Cactus Flower Plant -**")
		.addFields({name: "Stats", 
							 value: "2 <:Bullseye:1062501003313819678>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 1 damage to everything."
							 },
							 {
								 name: "Set-Rarity",
								 value: "Galactic - Super-Rare"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I take pity on no one. For I am Galacta-Cactus."`
							 })
			.setColor("Random")
			
			message.channel.send({embeds: [gaca]})
	}
}