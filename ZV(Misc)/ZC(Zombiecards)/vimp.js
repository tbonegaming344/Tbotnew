const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `vimpire`,
	aliases: [`vimp`, `Vimpire`, `Vimp`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/03/HD_Vimpire.png/revision/latest/scale-to-width-down/250?cb=20161030151001")
			.setTitle("Vimpire | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Imp Monster Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Frenzy:1062501819592491108>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "<:Frenzy:1062501819592491108>__Frenzy__"
                 },
                 {
                   name: "Ability", 
                   value: "This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> when it destroys a Plant."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `He vants to suck your cholorphyll.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}