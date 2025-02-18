const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `grapesofwrath`,
	aliases: [`grapes2`, `wrath2`, `gow`, `gw`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let gw = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/37/GrapesofWrathCardImage.png/revision/latest?cb=20180208070040")
		.setTitle("Grapes of Wrath | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 7 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 6 damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Everyone's always asking, 'Why so angry?' Because ZOMBIES! Sheesh. Obviously."`
							 })
		message.channel.send({embeds: [gw]})
	}
}