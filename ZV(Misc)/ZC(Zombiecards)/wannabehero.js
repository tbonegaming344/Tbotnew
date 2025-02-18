const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `wannabehero`,
	aliases: [`wh`, `wannabe`, `wannabegarg`, `worstlegendary`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c0/WannabeHeroCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225222608")
		.setTitle("Wannabe Hero | <:Hearty:1062501636557242429>")
		.setDescription("- **Gargantuar Zombie** -")
		.addFields({name: "Stats", 
								value: "6 <:Frenzy:1062501819592491108>, 1 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
							 {
								 name: "Trait", 
								 value: "<:Frenzy:1062501819592491108>__Frenzy__"
							 },
							 {
								 name: "Ability",  
								 value: "**When played**: Heal 3 then this gets +1<:Health:1062515540712751184> for each Health your Hero has. "
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "He has Super Brainz stickers all over his binder."
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}