const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `firepeashooter`,
	aliases: [`fire3`, `firepea`, `flame`, `flamepea`, `fp`, `fps`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const fp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1d/By_A.Qu%E1%BB%91c.png/revision/latest/scale-to-width-down/250?cb=20171127084525")
		.setTitle("Fire Peashooter | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Is it getting hot in here or is it just me?"`
							 })
		message.channel.send({embeds: [fp]})
	}
}