const {EmbedBuilder} = require("discord.js")
module.exports = {
name: `surferzombie`,
	aliases: [`surfer`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c2/SurferZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143948")
		.setTitle("Surfer Zombie | <:Beastly:1062500894744264714>")
		.setDescription("- **Party Sports Zombie** -")	
		.addFields({name: "Stats", 
								value: "4 <:Frenzy:1062501819592491108>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
							 {
								 name: "Ability",  
								 value: "__Amphibious__, <:Frenzy:1062501819592491108>__Frenzy__"
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "He used to hang 10 with the best of them, but ever since he lost that toe to a shark he hasn't been able to hang more than 9."
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}