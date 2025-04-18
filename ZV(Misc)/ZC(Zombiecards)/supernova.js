const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `supernovagarg`,
	aliases: [`supernova`, `supernovagargantuar`, `nova`, `novagarg`,],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/Supernova_Gargantuar_HD.png/revision/latest/scale-to-width-down/250?cb=20170603161735")
			.setTitle("Supernova Gargantuar | <:Beastly:1062500894744264714>")
					.setDescription("**\\- Science Gargantuar Zombie -**")
			.addFields({name: "Stats", 
									value: "5 <:Frenzy:1062501819592491108>, 7 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Frenzy:1062501819592491108> __Frenzy__"  
								 },
								 {
									 name: "Ability",  
									 value: "When a Gargantuar destroys a Plant, destroy all copies of that Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "This one's got a real temper on him. When he decides to take out a Plant...it's brutal. Just brutal."
								 })
			.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
}
}