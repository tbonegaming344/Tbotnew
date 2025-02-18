const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `hotlava`,
	aliases:[`hot2`, `lava1`, `hl`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let hl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8a/Hot_Lava_Environment.png/revision/latest/scale-to-width-down/148?cb=20170625202848")
		.setTitle("Hot Lava | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Before combat here:** Do 1 damage to each Plant and Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Lava has no loyalty. It's just hot. It just IS."
							 })
		message.channel.send({embeds: [hl]})
	}
}