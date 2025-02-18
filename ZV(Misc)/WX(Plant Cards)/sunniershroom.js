const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sunniershroom`,
	aliases: [`sunnier`, `ss12`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const ss1 = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5b/Sunnier-Shroom_HD.png/revision/latest?cb=20200805002257")
		.setTitle("Sunnier-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +2<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Compared to his little brother, he's the one with the sunnier disposition."
							 })
		message.channel.send({embeds: [ss1]})
	}
}