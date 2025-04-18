const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bluesberry`,
	aliases: [`blues`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const blues = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/51/HD_Bluesberry.png/revision/latest?cb=20160815080820")
		.setTitle("Bluesberry | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 2 damage. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Loves to make Zombies sing the blues."
							 })
		message.channel.send({embeds: [blues]})
	}
}