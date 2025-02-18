const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `redstinger`,
	aliases: [`stinger`, `rs1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let rs = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/Red_Stinger_HD.png/revision/latest?cb=20150603123043")
		.setTitle("Red Stinger | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "2 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played behind a Plant:** This becomes 7<:Strength:1062501774612779039>/2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I do stretching exercises every morning," he says. "It's important to stay physically and mentally nimble."`
							 })
		message.channel.send({embeds: [rs]})
	}
}