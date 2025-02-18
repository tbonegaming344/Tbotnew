const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `applesaucer`,
	aliases: [`apple`, `saucer`, `as2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let as = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4a/Apple_Saucer_HD.png/revision/latest/scale-to-width-down/250?cb=20170227033131")
		.setTitle("Apple-Saucer | <:Solar:1062502678384607262>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** If you made at least 6<:Sun:1062501177679413409> this turn, this gets <:Strikethrough:1062502987425140806>__Strikethrough__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Watchful Quasar Wizards sometimes spot an Unidentified Fruiting Object."
							 })
		message.channel.send({embeds: [as]})
	}
}