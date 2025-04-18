const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `walrusrider`,
	aliases: [`walrus`, `wr`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/49/WeaselImpperino.png/revision/latest?cb=20170407171035")
			.setTitle("Walrus Rider | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Imp Pet Zombie   -**")
			.addFields({name: "Stats", 
                  value: "3 <:AntiHero:1062501067700568074>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Amphibious__, <:AntiHero:1062501067700568074>__Anti-Hero 3__"
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `A walrus seemed the obvious choice. After all, horses don't go on land and water.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}