const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `highvoltagecurrant`,
	aliases: [`highvoltage`, `high`, `voltage`, `currant`, `hvc`,`oafishcard`, `oafish1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let hvc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/HighVoltageCurrant_RealHD.png/revision/latest/scale-to-width-down/250?cb=20181117025735")
		.setTitle("High-Voltage Currant | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039> when another Berry does damage. \n When played: __Conjure__ a Berry." 
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "These trouble makers are just asking to get grounded."
							 })
		message.channel.send({embeds: [hvc]})
	}
}