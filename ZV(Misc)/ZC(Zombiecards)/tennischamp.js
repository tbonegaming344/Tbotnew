const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `tennischamp`,
	aliases: [`tennis`, `tc2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/55/TennisChampCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227163206")
			.setTitle("Tennis Champ | <:Crazy:1062502046474973224>")
					.setDescription("**\\- Sports Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played:** This gets +3<:Strength:1062501774612779039> this turn." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "When it's Plants vs. Zombies, the score is never love-love."
								 })
			.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
}
}