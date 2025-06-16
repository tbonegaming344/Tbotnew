const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `umbrellaleaf`,
	aliases: [`umbrella`, `leaf`, `ul`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const ul = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1113170830080344235/umbrella.webp")
		.setTitle("Umbrella Leaf | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "Other Plants here and next door are <:Untrickable:1062501535126409277>__Untrickable__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's not very frond of getting wet."
							 })
		message.channel.send({embeds: [ul]})
	}
}