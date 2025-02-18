const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `discodancefloor`,
	aliases: [`ddf`, `discofloor`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8a/Disco_Dance_Floor_card_face.png/revision/latest?cb=20170810001821")
			.setTitle("Disco Dance Floor | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "0 <:Overshoot:1062764273417339052>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "<:Overshoot:1062764273417339052>__Overshoot 2__"
								 },
								 {
									 name: "Ability",  
									 value: "__**Fusion**__: A Zombie played on this gets <:Overshoot:1062764273417339052>__Overshoot 2__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The Triassic Invasion brought the very best of Zombie culture: Disco.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}