const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `snakegrass`,
	aliases: [`snake`, `grass`, `sneec`, `sg2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sg = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106271469719261286/SnakeGrassHD.webp")
		.setTitle("Snake Grass | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Make another Snake Grass in the lane to the right. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Snakes. Why'd it have to be snakes?"`
							 })
		message.channel.send({embeds: [sg]})
	}
}