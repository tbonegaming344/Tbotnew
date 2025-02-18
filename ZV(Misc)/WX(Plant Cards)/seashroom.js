const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `seashroom`,
	aliases: [`sea`, `ss3`],
	category: `Plant Cards`,
	run: async(client, message, args) => {
		let sea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e4/Heroes_seashroom.png/revision/latest/scale-to-width-down/250?cb=20190313160408")
		.setTitle("Sea-Shroom | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Teaches swimming lessons to disadvantaged Plants in his spare time."
							 })
		message.channel.send({embeds: [sea]})
	}
}