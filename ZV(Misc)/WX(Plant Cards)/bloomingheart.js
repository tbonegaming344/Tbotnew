const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bloomingheart`,
	aliases: [`blooming`, `heart`, `bh1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const bh = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/47/Blooming_Heart.png/revision/latest?cb=20190502193328")
		.setTitle("Blooming Heart | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability", 
								 value: "When this does damage, it gets +1<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes we hurt the ones we love. Blooming Heart knows this all too well."
							 })
		message.channel.send({embeds: [bh]})
	}
}