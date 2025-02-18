const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `powerflower`,
	aliases: [`power`, `pf3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/Power_Flower....png/revision/latest?cb=20160423151116")
		.setTitle("Power Flower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strikethrough:1062502987425140806>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Heal you Hero for 1 for each Flower. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Dropped out of Kale University to practice natural medicine."
							 })
		message.channel.send({embeds: [pf]})
	}
}