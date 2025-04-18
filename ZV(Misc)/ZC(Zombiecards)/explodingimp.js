const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `explodingimp`,
	aliases: [`bomb`, `bombimp`, `exploding`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7b/ExplodingImp.png/revision/latest/scale-to-width-down/250?cb=20180118134859")
			.setTitle("Exploding Imp | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "6 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**End of Turn**: This does 1 damage to itself."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `You could say he's an IMPlosives expert.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}