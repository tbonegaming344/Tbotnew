const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zookeeper`,
	aliases: [`zk1`, `zookeeper`, `zoo`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e6/ZookeeperCardImage.png/revision/latest/scale-to-width-down/250?cb=20170302210404")
			.setTitle("Zookeeper | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Professional Zombie  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "When you play a Pet, all Pets get +1<:Strength:1062501774612779039>."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Basic - Common**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Snaaaaake!`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}