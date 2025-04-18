const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `badmoonrising`,
	aliases: [`bmr`, `badmoon`, `badrising`, `moonrising`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2b/Bad_Moon_RisingH.png/revision/latest?cb=20170801062736")
			.setTitle("Bad Moon Rising | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Trick  -**")
			.addFields({
									name: "Stats", 
									value: "7 <:Brainz:1062503146745774183>"
								},
								 {
									 name: "Ability",  
									 value: "Transform all Zombies into random Zombies that cost 5<:Brainz:1062503146745774183> or more. "
								 },
								 {
									name: "Set-Rarity", 
									value: "**Event**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Sometimes a full moon turns bad dreams into 	 
horrible nightmares`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}