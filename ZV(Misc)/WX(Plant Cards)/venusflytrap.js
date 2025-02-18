const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `venusflytrap`,
	aliases: [`venus`, `flytrap2`, `vf1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let vf = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107430921520558161/HD_Venus_Flytrap.webp")
		.setTitle("Venus Flytrap | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this does damage, heal your Hero that much. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "Premium - Uncommon"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Mom always said, 'If you leave your trap open like that, you'll catch Zombies.' So I did."`
							 })
		message.channel.send({embeds: [vf]})
	}
}