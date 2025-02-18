const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `valkyrie`,
	aliases: [`valk`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/07/Valkrie.png/revision/latest/scale-to-width-down/250?cb=20171127095907")
			.setTitle("Valkyrie | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing History Zombie  -**")
			.addFields({name: "Stats", 
                  value: "0 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "**While in your hand:** This gets +2<:Strength:1062501774612779039> when a Zombie is destroyed. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Legendary**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `It's not easy hitting those high notes when all you can sing is, "Braaaaains.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}