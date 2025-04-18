const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `sugarytreat`,
	aliases: [`sugary`, `st`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/SugaryTreatCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226102512")
			.setTitle("Sugary Treat | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +3<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Tooth decay: Not exactly a big concern for Zombies.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}