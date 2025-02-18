const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `hauntedpumpking`,
	aliases: [`haunted`, `pumpkin`, `hp`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let hp = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107115930577813595/Pumpking_HD.webp")
		.setTitle("Haunted Pumpking | <:Solar:1062502678384607262>")
		.setDescription("**\\- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** The Zombie player __Conjures__ a Monster."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "For generations, the Pumpkings have kept their realms safe from a terrible curse. Tonight, they finally face their greatest fear."
							 })
		message.channel.send({embeds: [hp]})
	}
}