const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `jurassicfossilhead`,
	aliases: [`jf`, `fossil`, `jurassic`, `fossilhead`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/05/JurassicFossilheadHd.png/revision/latest/scale-to-width-down/250?cb=20180510155455")
			.setTitle("Jurassic Fossilhead | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional History Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Untrickable:1062501535126409277>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
							value: "<:Untrickable:1062501535126409277>__Untrickable__" 
								 },
								 {
									 name: "Ability",  
									 value: "**__Professional Evolution__**: This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `For him, Fossilheading isn't just a hobby. It's a career.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}