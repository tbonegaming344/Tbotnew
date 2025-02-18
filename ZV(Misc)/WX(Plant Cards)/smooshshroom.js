const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `smooshshroom`,
	aliases: [`smoosh`, `ss8`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ss = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ae/SmooshShroomHD.png/revision/latest/scale-to-width-down/250?cb=20170831060015")
	.setTitle("Smoosh-Shroom | <:Smarty:1062502890448638022>")
	.setDescription("**\\- Mushroom Plant -**")
	.setColor("Random")
	
	.addFields({name: "Stats",
						 	value: "5 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
						 {
							 name: "Set-Rarity",
							 value: "**Basic - Common**"
						 },
						 {
							 name: "Flavor Text",
							 value: `"If I had a hammer... Wait a sec... I AM a hammer!"`
						 })
	message.channel.send({embeds: [ss]})
	}
}