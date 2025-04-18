const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `grizzlypear`,
	aliases: [`grizzly`, `gp1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const gp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1f/HDGrizzlyPear.png/revision/latest?cb=20170217102445")
		.setTitle("Grizzly Pear | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Fruit Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "5 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `It's true what they say, "Never get between a Grizzly Pear and her cub." Double true for Zombies.`
							 })
		message.channel.send({embeds: [gp]})
	}
}