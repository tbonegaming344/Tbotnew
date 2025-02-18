const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `wizardgarg`,
	aliases: [`wizardgargantuar`, `wizard`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6a/HDWG.png/revision/latest/scale-to-width-down/250?cb=20170107071428")
			.setTitle("Wizard Gargantuar | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache Gargantuar Zombie   -**")
			.addFields({name: "Stats", 
                  value: "5 <:Bullseye:1062501003313819678>, 6 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability",  
                   value: "All Gargantuars have <:Bullseye:1062501003313819678>__Bullseye__. \n **When Played:** Transform another Zombie into a random Zombie that costs 1 more."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `A wizard did it. An enormous, green, Zombie wizard. `
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}