const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `jackolatern`,
	aliases: [`jack`, `jacko`, `lantern`, `jol`, `jl`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let jl = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107413783871234048/JackOLantern.webp")
		.setTitle("Jack O' Lantern | <:Solar:1062502678384607262>")
		.setDescription("**\\- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039> when it hurts the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I just love to get Zombies all fired up. If you catch my drift."`
							 })
		message.channel.send({embeds: [jl]})
	}
}