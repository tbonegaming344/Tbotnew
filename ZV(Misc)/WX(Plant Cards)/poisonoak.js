const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `poisonoak`,
	aliases: [`poison3`, `oak`, `po`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const po = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/80/HD_Poison_Oak.png/revision/latest/scale-to-width-down/250?cb=20191005194804")
		.setTitle("Poison Oak | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Leafy Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:AntiHero:1062501067700568074>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:AntiHero:1062501067700568074>__Anti-Hero 5__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Gets lunch with Poison Ivy and Poison Mushroom every week. They have a lot to talk about."
							 })
		message.channel.send({embeds: [po]})
	}
}