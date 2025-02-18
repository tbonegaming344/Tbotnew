const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `smashinggarg`,
	aliases: [`smashing`, `smashinggargantuar`, `sg`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/villains/images/1/18/HDsmashinggarg.png/revision/latest?cb=20200124222546")
			.setTitle("Smashing Gargantuar | <:Beastly:1062500894744264714>")
					.setDescription("**\\- Gargantuar Zombie -**")
			.addFields({name: "Stats", 
									value: "5 <:Frenzy:1062501819592491108>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									value: "All Gargantuars have <:Frenzy:1062501819592491108>__Frenzy__." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text",
									 value: "When he phones home, it means something completely different."
								 })
			.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
		}
}