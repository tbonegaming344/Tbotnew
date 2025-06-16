const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `repeater`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const rep = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/f/f4/HD_Repeater_%28PvZH%29.webp/revision/latest/scale-to-width-down/250?cb=20211107175839")
		.setTitle("Repeater | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:DoubleStrike:1062501703494160394>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Yes! Yes! Let's do this! Let's do this!"`
							 })
		message.channel.send({embeds: [rep]})
	}
}