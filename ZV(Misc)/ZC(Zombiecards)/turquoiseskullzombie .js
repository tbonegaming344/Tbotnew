const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `turquoiseskullzombie`,
	aliases: [`tsz`, `turquoise`, `turquoiseskull`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/87/TurqoiseSkullZombie.png/revision/latest/scale-to-width-down/250?cb=20180211090228")
			.setTitle("Turquoise Skull Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
                 {
                   name: "Ability",  
                   value: "**Start of Turn**: The Plant player loses 1<:Sun:1062501177679413409>. \n This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
                 }, 
                 {
                   name: "Set-Rarity", 
                   value: "**Triassic - Super-Rare**"
                 }, 
                 {
                   name: "Flavor Text", 
                   value: `The mystical Turquoise Skull stole the sun itself, lighting the way o the Mustache Monuments.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}