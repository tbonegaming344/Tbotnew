const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `superphatbeets`,
	aliases: [`superphat`, `phatbeets`, `spb`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let spb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9c/HD_Super_Phat_Beets.png/revision/latest/scale-to-width-down/250?cb=20160323025515")
		.setTitle("Super-Phat Beets | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "****When played:**** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> for each other Plant and Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When he drops the beet, everyone feels it. Especially the Zombies."
							 })
		message.channel.send({embeds: [spb]})
	}
}