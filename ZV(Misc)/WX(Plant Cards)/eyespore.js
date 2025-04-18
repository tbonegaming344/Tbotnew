const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `eyespore`,
	aliases: [`eye`],
	category: `Plant Cards`,
	run: async(client,message, args)=> {
		const eye = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/93/Eye-Spore.png/revision/latest/scale-to-width-down/250?cb=20201120095447")
		.setTitle("Eyespore | <:Solar:1062502678384607262>")
		.setDescription("**\\- Moss Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** Destroy a Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Really good at staring contests."
							 })
		message.channel.send({embeds: [eye]})
	}
}