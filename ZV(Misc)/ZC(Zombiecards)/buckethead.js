const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `buckethead`,
	aliases: [`bucketboi`, `bh3`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b5/PvZH_Buckethead_HD.png/revision/latest?cb=20161012010004")
			.setTitle("Buckethead | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 4 <:Armored:1062502392005922919>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "<:Armored:1062502392005922919>__Armored 1__" 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Uncommon**" 
								 },
								 {
									name: "Flavor Text", 
									value: `Why a bucket? Well, gosh, in this economy, why NOT?` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}