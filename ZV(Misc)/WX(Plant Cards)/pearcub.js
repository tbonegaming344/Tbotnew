const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pearcub`,
	aliases: [`pear`, `cub`, `pc1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c5/HD_Pear_Cub.png/revision/latest?cb=20161215105551")
		.setTitle("Pear Cub | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Fruit Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Make a 5<:Strength:1062501774612779039>/4<:Health:1062515540712751184> Grizzly Pear with __Amphibious__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "So cute and cuddly and... wait, what's that growling sound?"
							 })
		message.channel.send({embeds: [pc]})
	}
}