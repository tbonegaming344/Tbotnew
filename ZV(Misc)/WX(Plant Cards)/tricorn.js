const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `tricorn`,
	aliases: [`trinut`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const tr = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8b/HDTricorn.png/revision/latest/scale-to-width-down/250?cb=20191005185131")
		.setTitle("Tricorn | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Attacks here and next door. \n **__Plant Evolution__:** This gets +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Labor to keep alive in your breast that little spark of celestial fire called conscience." -Gourd Squashington`
							 })
		message.channel.send({embeds: [tr]})
	}
}