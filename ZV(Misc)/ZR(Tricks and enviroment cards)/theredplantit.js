const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `thredplantit`,
	aliases: [`red`, `plantit`, `rp`, `rpi`, `trpi`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const rp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/26/The_Red_Plant-It_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20170424025124")
		.setTitle("The Red Plant-It | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Root Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here get +5<:Strength:1062501774612779039>/+5<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It may seem an inhospitable place for Plants, but with a little TLC and some patience, it'll grow more than just potatoes. Much more."
							 })
		message.channel.send({embeds: [rp]})
	}
}