const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `elderberry`,
	aliases: [`elder`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const eld = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/31/Elderberry_cardface.png/revision/latest?cb=20170701155820")
		.setTitle("Elderberry | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** This gets +3<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `He makes yelling "Get off my lawn" into an art form.`
							 })
		message.channel.send({embeds: [eld]})
	}
}