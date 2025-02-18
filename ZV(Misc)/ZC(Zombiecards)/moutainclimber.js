const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `moutainclimber`,
	aliases: [`climber`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0a/Mountain_Climber_HD.png/revision/latest/scale-to-width-down/250?cb=20161012005142")
			.setTitle("Mountain Climber | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Bullseye:1062501003313819678>__Bullseye__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played on Heights:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>.  "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `She's climbed 'em all: Everest. K2. Your house.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}