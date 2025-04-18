const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `hotdogimp`,
	aliases: [`hotdog`, `korv`, `hdi`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/36/HotDogImpCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226114656")
			.setTitle("Hot Dog Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Gourmet Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strikethrough:1062502987425140806>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
				value: "<:Strikethrough:1062502987425140806>__Strikethrough__" 
								 },
								 {
								name: "Set-Rarity", 
								value: "**Premium - Uncommon**"},
								 {
									name: "Flavor Text", 
									value: `He was THIS close to wearing the chicken costume, but darn it, Team Mascot Imp called it first.` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}