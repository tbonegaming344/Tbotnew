const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `venusflytraplanet`,
	aliases: [`flytraplanet`, `vfp`, `vf2`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let vfp = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107455473965342820/FlytraplandCardImage.webp?width=384&height=384")
		.setTitle("Venus Flytraplanet | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flytrap Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
								value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant here does damage and survives, heal your Hero that much."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Not far from Mercury Flytraplanet."
							 })
		message.channel.send({embeds: [vfp]})
	}
}