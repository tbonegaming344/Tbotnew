const {EmbedBuilder}= require("discord.js")
module.exports= {
	name: `steelmagnolia`,
	aliases: [`steel`, `magnolia`, `sm2`, `steelmag`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/Not_HD_Steel_Magnolia.png/revision/latest/scale-to-width-down/250?cb=20200224084250")
		.setTitle("Steel Magnolia | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Plants here and next door +2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's got nerves of steel... and everything else of steel!"
							 })
		message.channel.send({embeds: [sm]})
	}
}