const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `gatlingpea`,
	aliases: [`gatling`, `gpea`, `gp3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const gp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7f/HDplus_gatling.png/revision/latest?cb=20161001120328")
		.setTitle("Gatling Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:DoubleStrike:1062501703494160394>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Ability",
								 value: "**__Pea Evolution__:** This does a Bonus Attack"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "There is no problem that cannot be solved by more peas."
							 })
		message.channel.send({embeds: [gp]})
	}
}