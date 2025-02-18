const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `firerooster`,
	aliases: [`fr`, `frooster`, `rooster`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e9/Fire_Rooster_HD_2.png/revision/latest/scale-to-width-down/250?cb=20180114041606")
			.setTitle("Fire Rooster | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "This moves to a random lane when a Plant is played here. \n **When this enters a lane:** Do 1 damage to all Plants here. " 
								 },
								 {
									name:  "Set-Rarity", 
									value: "**Event**"
								 },
								 {
									 name: "Flavor Text",
									 value: `According to the Chinese Zodiac, it's the year of the Fire Rooster. Crispy fried Plants for all your Zombies!`
								 }
							)
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}