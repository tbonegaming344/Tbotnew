const {EmbedBuilder}= require("discord.js")
module.exports = {
name: `kernelpult`,
aliases: [`kernel2`, `kp`],
category: `Plant Cards`,
run: async(client, message, args)=> {
	const kp = new EmbedBuilder()
	.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107309838100344842/KernelPult.webp")
.setTitle("Kernel-Pult | <:Solar:1062502678384607262>")
	.setDescription("**\\- Corn Plant -**")
	.setColor("Random")
	
	.addFields({name: "Stats",
						 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
						 {
							 name: "Trait",
							 value: "__Team-Up__"
						 },
						 {
							 name: "Ability",
							 value: "**When played on the Heights:** A Zombie gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
						 },
						 {
							 name: "Set-Rarity",
							 value: "**Colossal - Uncommon**"
						 },
						 {
							 name: "Flavor Text",
							 value: "Insert corny joke here."
						 })
	message.channel.send({embeds: [kp]})
}
}