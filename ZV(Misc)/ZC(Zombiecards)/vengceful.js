const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `vengefulcyborg`,
	aliases: [`vengeful`, `vc`, `bigborg`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a8/HD_Vengeful_Cyborg_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210304225754")
			.setTitle("Vengeful Cyborg | <:Beastly:1062500894744264714>")
					.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
                  value: "5 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait",
                   value: "__Hunt__"
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Triassic - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: "His toupee went missing in the heat of battle and he's been furious about it ever since"
                 })
			.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
}
}