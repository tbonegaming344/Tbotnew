const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `frankentuar`,
	aliases: [`frank`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/Frankentuar2.png/revision/latest/scale-to-width-down/250?cb=20170218012918")
			.setTitle("Frankentuar | <:Crazy:1062502046474973224>")
					.setDescription("**\\- Gargantuar Monster Zombie -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
									{
										name: "Trait", 
										value: " __Splash Damage 2__"
									},
								 {
									name: "Ability",  
									 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when a Zombie is destroyed." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "IT'S ALIVE! IT'S ALI-I-I-IVE! Ok, strictly speaking, it's not alive."
								 })
			.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
}
}