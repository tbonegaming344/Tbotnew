const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `knightofthelivingdead`,
	aliases: [`kotld`, `kld`, `knight`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6b/Knight.png/revision/latest/scale-to-width-down/250?cb=20180209023747")
		.setTitle("Knight of the Living Dead | <:Hearty:1062501636557242429>")
		.setDescription("- **History Sports Zombie** -")
		.addFields({name: "Stats", 
								value: "5 <:Strength:1062501774612779039>, 5 <:Armored:1062502392005922919>, 7 <:Brainz:1062503146745774183>"},
							 {
								 name: "Trait", 
								 value: "<:Armored:1062502392005922919>__Armored 2__"
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "He's both secretary and treasurer for the Knights of the Square Table."
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}