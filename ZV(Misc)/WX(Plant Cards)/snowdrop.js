const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `snowdrop`,
	aliases: [`iceagebaby`, `snow`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const snow = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7f/SnowdropHD.png/revision/latest/scale-to-width-down/250?cb=20170426234746")
		.setTitle("Snowdrop | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> when a Zombie is frozen. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies are always looking at her with a frozen expression."
							 })
		message.channel.send({embeds: [snow]})
	}
}