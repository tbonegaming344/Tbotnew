const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sweetpotato`, 
	aliases: [`sweet1`, `potato2`, `sp2`, `yoyocard`, `yoyo1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let sp = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/HDSweetPotato.png/revision/latest?cb=20200407234532")
		.setTitle("Sweet Potato | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie to this lane."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Loves unicorns and rainbows... and watching cats on the Internet."
							 })
		message.channel.send({embeds: [sp]})
	}
}