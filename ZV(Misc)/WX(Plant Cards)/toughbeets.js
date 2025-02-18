const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `toughbeets`,
	aliases: [`tough`, `tb1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let tb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/54/HD_Tough_Beets.png/revision/latest?cb=20160429141931")
		.setTitle("Tough Beets | <:Guardian:1062501130501885973>")
		.setDescription("** - Root Plant - **")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Armored:1062502392005922919>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Armored 1__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> for each other Plant and Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He grew up on the wrong side of the garden."
							 })
		message.channel.send({embeds: [tb]})
	}
}