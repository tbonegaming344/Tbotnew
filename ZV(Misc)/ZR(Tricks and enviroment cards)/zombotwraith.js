const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotwrath`,
	aliases: [`wrath`, `zw`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4b/Zombot%27s_Wrath_HD.png/revision/latest?cb=20161012011434")
			.setTitle("Zombot's Wrath | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Science Gargantuar Trick -**")
			.addFields({name: "Stats", 
                  value: "2 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "Do damage equal to the number of Zombies"
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Dr. Zomboss believes there's no problem that can't be solved by a giant robot.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}