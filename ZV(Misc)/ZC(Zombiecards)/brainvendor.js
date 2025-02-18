const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `brainvendor`,
	aliases: [`vendor`, `bv`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/BrainVendorCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226165700")
			.setTitle("Brain Vendor | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Gourmet Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played:** You get +3<:Brainz:1062503146745774183> this turn. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Sells only 100% organic brains."
								 }
							)
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}