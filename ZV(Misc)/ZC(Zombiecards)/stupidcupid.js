const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `stupidcupid`, 
	aliases: [`stupid`, `cupid`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/41/StupidCupidHD.png/revision/latest/scale-to-width-down/250?cb=20170215014353")
			.setTitle("Stupid Cupid | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played:** Do 1 damage to a Plant. That Plant has 0<:Strength:1062501774612779039> this turn." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `What's love got to do with it? Honestly, he has no idea.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}