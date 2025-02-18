const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `devour`, 
	aliases: [`chomp`, `czsig`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let cz = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c0/DevourCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226185049")
		.setTitle("Devour | <:MegaGrow:1062501412992458802><:Solar:1062502678384607262>")
		.setDescription("**\\- Flytrap Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie with the lowest Health. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Chompzilla enjoys eating Zombies whole. She does not enjoy the indigestion that follows."
							 })
		message.channel.send({embeds: [cz]})
	}
}